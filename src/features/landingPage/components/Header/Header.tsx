import React from 'react'
import MembershipForm from '../../forms/MembershipForm'
import {useSelector,useDispatch} from 'react-redux'
import {logout} from 'lib/redux-store/Actions/auth'

import {Container,Body,HeaderImage,Nav,NavButton,
        TextContainer,TextTitle,TextSubtitle,SignOutButton
      } from './styles/Header'

import {stateType} from 'lib/redux-store/types'

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
    const dispatch = useDispatch();
    const authToken=useSelector((state:stateType)=>{
        return state.auth.token;
    })
    const signOutHandler=()=>{
        dispatch(logout());
    }
    return(
        <Nav>
           {!authToken?<NavButton to="/sign-in"><span>Sign In</span></NavButton>:
            <SignOutButton onClick={signOutHandler}>Sign Out</SignOutButton>
           }
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
