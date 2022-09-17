import React from 'react'
import {Link} from 'react-router-dom'
import  {Container,Logo,NavLink,SignOutButton} from './style/Navbar.style'
import {useSelector,useDispatch} from 'react-redux'
import {logout} from '../../../../redux-store/Actions/auth'
import {stateType}  from 'redux-store/types'

const logo= require('../../../../assets/images/icons/logo.png')
const Navbar = ({className}:{className?:string}) => {
    const dispatch = useDispatch();
    const authToken=useSelector((state:stateType)=>{
        return state.auth.token;
    })
    const signOutHandler=()=>{
        dispatch(logout());
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
