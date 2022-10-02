import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import  {Container,Logo,NavLink,SignOutButton} from './style/Navbar.style'
import {useSelector} from 'react-redux'

import {stateType}  from 'lib/redux-store/types'

const logo= require('assets/images/icons/logo.png')
const Navbar = ({className}:{className?:string}) => {
    const navigate=useNavigate();
    const authToken=useSelector((state:stateType)=>{
        return state.auth.token;
    })
    const signOutHandler=()=>{
        navigate('/sign-out')
    }
    return (
        <Container className={className}>
            <Link to='/'><Logo src={logo}/></Link>
            {!authToken?<NavLink to="/sign-in">Sign In</NavLink>:
            <SignOutButton onClick={signOutHandler}>Sign Out</SignOutButton>
            }
        </Container>
    )
}

export default Navbar
