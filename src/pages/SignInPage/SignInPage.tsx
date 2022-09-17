import React from 'react'
import {Container,StyledFooter} from './styles/SignInPage'
import SignInForm from 'features/signIn/forms/SignInForm'
const footerItems=require('data/signInPageFooter.json')
const image=require('assets/images/misc/NetflixAssets/HeaderPicture.jpg')

const SignInPage = () => {
    return (
        <Container {...{image:image}}>
            <SignInForm/>
            <StyledFooter footerItems={footerItems}/>
        </Container>
    )
}

export default SignInPage
