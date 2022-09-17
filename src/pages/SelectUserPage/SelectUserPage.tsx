import React from 'react'
import {Container,Heading,UsersListContainer,Logo,
        Navbar,StyledProfilesButton,StyledUser,
        Picture,Username
    } from './styles/SelectUserPage'
import {useNavigate} from 'react-router-dom'
import userType from 'types/usersDataType'

const users=require('data/users.json') as userType[];
const NetflixLogo = require('assets/images/icons/logo.png')


const SelectUserPage = () => {
    return (
        <Container>
            <Navbar>
                <Logo src={NetflixLogo}/>
            </Navbar>
            <Heading>Who's watching?</Heading>
            <UsersList/>
            <ProfilesButton/>
        </Container>
    )
}

const UsersList=()=>{
    return(
        <UsersListContainer>{
           users.map((userData)=>{
            return <User key={userData.userId} userData={userData}/>
           })
        }</UsersListContainer>
    )
}

const User=({userData}:{userData:userType})=>{
    const navigate=useNavigate()
    const userClickedHandler=() => {
        navigate('/browse')
    }
    return(
        <StyledUser>
            <Picture src={userData.avatar} onClick={userClickedHandler}/> 
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
