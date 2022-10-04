import React from 'react'
import {StyledFooter,StyledLink} from './style/Footer.style'
const footerItems=require('../../../../data/signInPageFooter.json')

const Footer = () => {
    return (
        <StyledFooter footerItems={footerItems} prepend={<StyledLink href="">Questions? Contact Us</StyledLink>}/>
    )
}

export default Footer
