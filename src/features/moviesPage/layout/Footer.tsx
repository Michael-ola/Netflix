import React from 'react'
import {Container,StyledFooterStructure,SocialsContainer,Icon,
        AppendContainer,ServiceCode,Copyright,AnchorTag} from './styles/Footer'
const footerItems=require('data/moviesPageFooter.json');
const facebookIcon=require('assets/images/icons/facebookIcon.png');
const instagramIcon=require('assets/images/icons/instagramIcon.png');
const youTubeIcon=require('assets/images/icons/youTubeIcon.png');

const Footer = () => {
    const Socials=(
        <SocialsContainer>
            <AnchorTag href=''><Icon src={facebookIcon}/></AnchorTag>
            <AnchorTag href=''><Icon src={instagramIcon}/></AnchorTag>
            <AnchorTag href=''><Icon src={youTubeIcon}/></AnchorTag>
        </SocialsContainer>
    )
    const appendItem=(
        <AppendContainer>
            <ServiceCode>
                Service Code
            </ServiceCode>
            <Copyright>
                {"© 2022 code-like-mike"}
            </Copyright>
        </AppendContainer>
    )
    return (
       <Container>
            <StyledFooterStructure footerItems={footerItems} prepend={Socials} append={appendItem}/>
       </Container>
    )
}

export default Footer
