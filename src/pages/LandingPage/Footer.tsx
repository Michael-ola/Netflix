import React from 'react'
import  FooterStructure from '../../components/Footer/Footer'
import {AnchorTag,FooterTitle,CountryText} from './styles/Footer'
const footerItems=require('../../fixtures/landingPageFooter.json');

const Footer = () => {
    const footerTitle=( 
        <FooterTitle>
            <AnchorTag  href={"https://help.netflix.com/contactus"}>Questions? Contact Us</AnchorTag>
        </FooterTitle>)

    const countryText=<CountryText>Netflix Nigeria</CountryText>
    return (
        <FooterStructure  footerItems={footerItems} prepend={footerTitle} append={countryText}/>
    )
}

export default Footer
