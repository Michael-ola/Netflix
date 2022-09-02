import React from 'react'
import {Container} from './style/SignUpPage.style'
import {Outlet} from 'react-router-dom'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'

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
