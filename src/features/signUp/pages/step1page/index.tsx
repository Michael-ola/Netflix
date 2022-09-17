import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Container,HeaderImage,InnerContainer,TextContainer} from './style/step1page.style'
import Button from 'components/NextPrevButton'

const deviceImage=require('assets/images/icons/Devices.png')

const Step1page = () => {
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
        unmount && timerFunc(()=>navigate('/sign-Up/step2'),250);

        return()=> {
            clearTimeout(time)
        } 
    },[navigate, unmount])


    const buttonClickedHandler=() => {
        setUnmount(true);
    }
    return (
      <Container {...{mount,unmount}}>
        <InnerContainer>
            <HeaderImage src={deviceImage}/>
            <TextContainer>
                <p style={{fontSize:'0.9rem' }}>STEP 1 of <strong>3</strong></p>
                <p style={{ fontWeight:'900',fontSize:'2rem',margin:'0 auto 0.3em auto',maxWidth:'23ch' }}>Finish setting up your account</p>
                <p style={{fontSize:'1.1rem'}}>Netflix is personalized for you.</p>
                <p style={{fontSize:'1.1rem',margin:'0 auto 1.3em auto',maxWidth:'37ch' }}>Create a password to watch on any device at any  time.</p>
            </TextContainer>
            <Button onClick={buttonClickedHandler}>Next</Button>
        </InnerContainer>
      </Container>
    )
}

export default Step1page
