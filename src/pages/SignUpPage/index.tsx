import React from 'react'
import {Container} from './style/SignUpPage.style'
import {Outlet} from 'react-router-dom'
import Navbar from 'features/signUp/Layout/Navbar'
import Footer from 'features/signUp//Layout/Footer'

const SignUpPage = () => {
    return (
        <Container>
            <div  id='CVVInfoOverlay'></div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </Container>
    )
}

export default SignUpPage
