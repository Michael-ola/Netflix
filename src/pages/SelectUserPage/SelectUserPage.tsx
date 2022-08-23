import React,{useState,useEffect} from 'react'
import {Container,Heading,UsersListContainer,Logo,
        Navbar,StyledProfilesButton,StyledUser,
        Picture,Username
    } from './styles/SelectUserPage'


const users=require('../../data/users.json')
const picture=require('../../assets/images/users/2.png')

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
        <UsersListContainer>{
           users.map((userData)=>{
            return <User key={userData.userId} userData={userData}/>
           })
        }</UsersListContainer>
    )
}

const User=({userData})=>{
    return(
        <StyledUser>
            <Picture src={userData.avatar}/> 
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
