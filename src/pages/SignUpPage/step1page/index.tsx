import React from 'react'
import {Link} from 'react-router-dom'
import {Container,HeaderImage,InnerContainer,TextContainer} from './style/step1page.style'
import Button from '../../../components/NextPrevButton'

const deviceImage=require('../../../assets/images/icons/Devices.png')

const step1page = () => {
    return (
      <Container>
        <InnerContainer>
            <HeaderImage src={deviceImage}/>
            <TextContainer>
                <p style={{fontSize:'0.9rem' }}>STEP 1 of <strong>3</strong></p>
                <p style={{ fontWeight:'900',fontSize:'2rem',margin:'0 auto 0.3em auto',maxWidth:'23ch' }}>Finish setting up your account</p>
                <p style={{fontSize:'1.1rem'}}>Netflix is personalized for you.</p>
                <p style={{fontSize:'1.1rem',margin:'0 auto 1.3em auto',maxWidth:'37ch' }}>Create a password to watch on any device at any  time.</p>
            </TextContainer>
            <Link to="step2"><Button>Next</Button></Link>
        </InnerContainer>
      </Container>
    )
}

export default step1page
