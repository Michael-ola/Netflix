import React from 'react'
import MembershipForm from '../../Forms/MembershipForm'

import {Container,Body,HeaderImage,Nav,NavButton,
        TextContainer,TextTitle,TextSubtitle,
      } from './styles/Header'

export interface HeaderProps{
    children?:JSX.Element|JSX.Element[]
}


export const Header= (props:HeaderProps):JSX.Element => {
    return (
        <HeaderContainer {...props}/>
    )
}

export const HeaderContainer= (props:HeaderProps):JSX.Element=>{
    return(
        <Container {...props}>
            <HeaderNav/>
            <HeaderImage/>
            <HeaderBody/>
        </Container>
    )
}

const HeaderNav= ():JSX.Element => {
    return(
        <Nav>
           <NavButton to="/sign-in"><span>Sign In</span></NavButton>
        </Nav>
    )
}

const  HeaderBody= ():JSX.Element => {
    return(
        <Body>
            <HeaderText/>
            <MembershipForm/>
        </Body>
    )
}

const HeaderText= ():JSX.Element => {
    return(
        <TextContainer>
            <TextTitle>Unlimited movies, TV shows, and more.</TextTitle>
            <TextSubtitle>Watch anywhere. Cancel anytime.</TextSubtitle>
        </TextContainer>
    )
}
