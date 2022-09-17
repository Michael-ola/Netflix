import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Container,Image,CardsContainer,StepText} from './style/Step3Page.style'
import Card from 'components/checkCard'
import Button from 'components/NextPrevButton'

const checkmarkImage=require('assets/images/icons/Checkmark.png')
const checkImage=require('assets/images/icons/check.png')


const Step3Page = () => {
    const navigate=useNavigate();
    const [mount,setMount]=useState(false);
    const [unmount,setUnmount] =useState(false)

    useEffect(() => {
        let time:ReturnType<typeof setTimeout>;
        const timerFunc=(callback:()=>void,duration:number)=>{
            time=setTimeout(() => {  
                callback();
            },duration)
        }
        timerFunc(()=>setMount(true),100);
        unmount && timerFunc(()=>navigate('/sign-up/planform'),250);

        return()=> {
            clearTimeout(time)
        } 
    },[navigate, unmount])

    const buttonClickedHandler=() => {
        setUnmount(true);
    }

    return (
        <Container {...{mount,unmount}}>
            <Image src={checkmarkImage}/>
            <StepText>STEP <strong>1</strong> OF <strong>3</strong></StepText>
            <p style={{fontWeight:'bold',fontSize:'2rem',color:'#333'}}>Choose your plan.</p>
            <CardsContainer>
                <Card image={checkImage} text="No commitments, cancel anytime."/>
                <Card image={checkImage} text="Everything on Netflix for one low price."/>
                <Card image={checkImage} text="No ads and no extra fees. Ever."/>
            </CardsContainer>
            <Button onClick={buttonClickedHandler}>Next</Button>
        </Container>
    )
}

export default Step3Page
