import React from 'react'
import {Container,InnerContainer,TextContainer} from './style/Step2Page.style'
import SignUpForm from '../../../Forms/SignUpForm'

const Step2Page = () => {
    return (
        <Container>
            <InnerContainer>
            <TextContainer>
                <p style={{fontSize:'0.9rem' }}>STEP 1 of <strong>3</strong></p>
                <p style={{ fontWeight:'900',fontSize:'2rem',margin:'0 auto 0.3em 0',maxWidth:'27ch' }}>Create a passsword to start your membership</p>
                <p style={{fontSize:'1.1rem'}}>Just a few more steps and you're done!</p>
                <p style={{fontSize:'1.1rem',margin:'0.8em auto 1.3em 0',maxWidth:'37ch' }}>We hate paperwork, too!</p>
            </TextContainer>
            <SignUpForm/>
            </InnerContainer>
        </Container>
    )
}

export default Step2Page
