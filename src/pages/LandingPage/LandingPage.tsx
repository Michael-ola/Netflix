import React from 'react'
import {JumbotronGenerator} from '../../components/Jumbotron/Jumbotron'
import {Header} from '../../containers/Header/Header'
import {FaqSection} from '../../containers/FaqSection/FaqSection'
import MembershipForm from '../../Forms/MembershipForm'
import Footer from './Footer'
import {Container} from './styles/LandingPage'

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
