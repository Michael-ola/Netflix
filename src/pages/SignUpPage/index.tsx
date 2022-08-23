import React from 'react'
import { } from './style/SignUpPage.style'
import {Outlet} from 'react-router-dom'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'

const SignUpPage = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default SignUpPage
