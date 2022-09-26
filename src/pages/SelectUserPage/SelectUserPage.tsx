import React,{useState,useEffect, useCallback} from 'react'
import {Container,Heading,UsersListContainer,Logo,
        Navbar,StyledProfilesButton,StyledUser,
        Picture,Username
    } from './styles/SelectUserPage'
import {useNavigate} from 'react-router-dom'
import userType from 'types/usersDataType'
import {getUserData} from 'services/firebase/getUsersData'
import {useSelector} from 'react-redux'
import { stateType } from 'lib/redux-store/types'
import Preloader from 'containers/Preloader'

const NetflixLogo = require('assets/images/icons/logo.png')


const SelectUserPage = () => {
    const [usersData,setUsersData]=useState<userType[]>([])
   
    const userId=useSelector((state:stateType)=>{
        return state.auth.userId
    })

    const users=useCallback(async ()=>{
        setUsersData(await getUserData(userId as string) as userType[])
    },[setUsersData, userId])

    useEffect(()=>{
        users()
    },[users])

    return (
        <>
        {usersData.length>0?
            <Container>
                <Navbar>
                    <Logo src={NetflixLogo}/>
                </Navbar>
                <Heading>Who's watching?</Heading>
                <UsersList usersData={usersData}/>
                <ProfilesButton/>
            </Container>:
            <Preloader/>
        }    
        </>
    )
}

const UsersList=({usersData}:{usersData:userType[]})=>{

    return(
        <UsersListContainer>{
            usersData.map((userData,index)=>{
             return <User key={index} userData={userData}/>
            })}
         </UsersListContainer>
    )
}

const User=({userData}:{userData:userType})=>{
    const navigate=useNavigate()
    const userClickedHandler=() => {
        navigate('/browse')
    }
    return(
        <StyledUser>
            <Picture src={require(`assets/images/users/${userData.avatar}`)} onClick={userClickedHandler}/> 
            <Username>{userData.username}</Username>
        </StyledUser>
    )
}

const ProfilesButton=()=>{
    return(
        <StyledProfilesButton>Manage Profiles</StyledProfilesButton>
    )
}

export default SelectUserPage
