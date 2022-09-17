import React from 'react'

import MembershipForm from 'features/landingPage/forms/MembershipForm'
import {JumbotronGenerator} from 'features/landingPage/components/Jumbotron/Jumbotron'
import {Header} from 'features/landingPage/components/Header/Header'
import {FaqSection} from 'features/landingPage/components/FaqSection/FaqSection'
import Footer from 'features/landingPage/layout/Footer'
import {Container} from './styles/index.style'

const LandingPage = () => {
   
    return (
        <Container>
            <Header/>
            <JumbotronGenerator/>
            <FaqSection/>
            <MembershipForm/>
            <Footer/>
        </Container>
    )
}

export default LandingPage
