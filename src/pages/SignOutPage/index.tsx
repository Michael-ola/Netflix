import React,{useState,useEffect} from 'react'
import {Container,StyledFooter,AffirmSignOutModal,ButtonContainer,Button,
    StyledNavbar,StyledLink} from './style/SignOutPage.style'
import {logout} from 'lib/redux-store/Actions/auth'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const footerItems=require('data/signInPageFooter.json')
const signOutTime=30;

const SignOutPage = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const [signOut,setSignOut]=useState(false);
    const time= signOut?1:signOutTime;
    useEffect(() =>{
        const signOutTimer=setTimeout(() =>{
            dispatch(logout());
            navigate('/');
        },time*1000)

        return()=>{
            clearTimeout(signOutTimer);
        }
    },[dispatch, navigate, signOut, time])

    return (
       <Container>
        <StyledNavbar/>
        <AffirmSignOutModal>
            <h1>Leaving so soon?</h1>
            <br/>
            <p>Just so you know, you don’t always need to sign out of Netflix.
                It’s only necessary if you’re on a shared or public computer.
            </p>
            <br/>
            <p>You’ll be redirected to Netflix.com in 30 seconds.</p>

            <ButtonContainer>
                <Button onClick={() => setSignOut(true)}>Go Now</Button>
            </ButtonContainer>
        </AffirmSignOutModal>
        <StyledFooter footerItems={footerItems} prepend={<StyledLink href="">Questions? Contact Us</StyledLink>}/>
       </Container>
    )
}

export default SignOutPage
 