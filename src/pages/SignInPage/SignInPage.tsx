import React from 'react'
import {Container,StyledFooter} from './styles/SignInPage'
import SignInForm from '../../Forms/SignInForm'
const footerItems=require('../../fixtures/signInPageFooter.json')
const image=require('../../assets/images/misc/NetflixAssets/HeaderPicture.jpg')

const SignInPage = () => {
    return (
        <Container {...{image:image}}>
            <SignInForm/>
            <StyledFooter footerItems={footerItems}/>
        </Container>
    )
}

export default SignInPage
