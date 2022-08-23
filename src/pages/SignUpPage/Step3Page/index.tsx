import React from 'react'
import {Link} from 'react-router-dom'
import {Container,Image,CardsContainer,StepText} from './style/Step3Page.style'
import Card from '../../../components/checkCard'
import Button from '../../../components/NextPrevButton'

const checkmarkImage=require('../../../assets/images/icons/Checkmark.png')
const checkImage=require('../../../assets/images/icons/check.png')


const Step3Page = () => {
    return (
        <Container>
            <Image src={checkmarkImage}/>
            <StepText>STEP <strong>1</strong> OF <strong>3</strong></StepText>
            <p style={{fontWeight:'bold',fontSize:'2rem',color:'#333'}}>Choose your plan.</p>
            <CardsContainer>
                <Card image={checkImage} text="No commitments, cancel anytime."/>
                <Card image={checkImage} text="Everything on Netflix for one low price."/>
                <Card image={checkImage} text="No ads and no extra fees. Ever."/>
            </CardsContainer>
            <Link style={{width: '100%'}} to="/sign-up/planform"><Button>Next</Button></Link>
        </Container>
    )
}

export default Step3Page
