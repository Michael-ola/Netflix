import React,{useState,useEffect} from 'react'
import {Container,Heading,UsersListContainer,Logo,
        Navbar,StyledProfilesButton,StyledUser,
        StyledUserPicture,StyledName
    } from './styles/SelectUserPage'
import picture from '../../assets/images/users/2.png'

const SelectUserPage = () => {
    return (
        <Container>
            <Navbar>
                <Logo src="https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png"/>
            </Navbar>
            <Heading>Who's Watching?</Heading>
            <UsersList/>
            <ProfilesButton/>
        </Container>
    )
}

const UsersList=()=>{
    return(
        <UsersListContainer>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
        </UsersListContainer>
    )
}

const User=()=>{
    return(
        <StyledUser>
            <UserPicture/>
            <UserName/>
        </StyledUser>
    )
}

const UserPicture=()=>{
    const [image,setImage]=useState('')
    useEffect(() => {
        //get image with axios on component mount
    },[])

    return(
        <StyledUserPicture src={picture}/>
    )
}

const UserName=()=>{
    const [name,setName]=useState('')
    useEffect(() => {
        //get name with axios on component mount
    },[])

    return(
        <StyledName>ali</StyledName>
    )
}

const ProfilesButton=()=>{
    return(
        <StyledProfilesButton>Manage Profiles</StyledProfilesButton>
    )
}

export default SelectUserPage
