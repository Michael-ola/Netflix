import React from 'react'
import {Link} from 'react-router-dom'
import  {Container,Logo,NavLink} from './style/Navbar.style'
const logo= require('../../../../assets/images/icons/logo.png')

const Navbar = () => {
    return (
        <Container>
            <Link to='/'><Logo src={logo}/></Link>
            <NavLink to="/sign-in">Sign In</NavLink>
        </Container>
    )
}

export default Navbar
