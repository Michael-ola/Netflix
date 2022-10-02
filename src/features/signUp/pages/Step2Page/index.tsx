import React,{useState,useEffect} from 'react'
import {Container,InnerContainer,TextContainer} from './style/Step2Page.style'
import SignUpForm from '../../forms/SignUpForm'
import {useNavigate} from 'react-router-dom'
import withErrorIndicator from 'HOC/withErrorIndicator'
import axios  from 'axios'

const Step2Page = () => {
    const navigate=useNavigate();
    const [mount,setMount]=useState(false);
    const [unmount,setUnmount] =useState(false);

    useEffect(() => {
        let time:ReturnType<typeof setTimeout>;
        const timerFunc=(callback:()=>void,duration:number)=>{
            time=setTimeout(() => {  
                callback();
            },duration)
        }
        timerFunc(()=>setMount(true),100);
        unmount && timerFunc(()=>navigate('/sign-up/step3'),250);

        return()=> {
            clearTimeout(time)
        } 
    },[navigate, unmount])

    return (
        <Container {...{mount,unmount}}>
            <InnerContainer>
            <TextContainer>
                <p style={{fontSize:'0.9rem' }}>STEP 2 of <strong>3</strong></p>
                <p style={{ fontWeight:'900',fontSize:'2rem',margin:'0 auto 0.3em 0',maxWidth:'27ch' }}>Create a passsword to start your membership</p>
                <p style={{fontSize:'1.1rem'}}>Just a few more steps and you're done!</p>
                <p style={{fontSize:'1.1rem',margin:'0.8em auto 1.3em 0',maxWidth:'37ch' }}>We hate paperwork, too!</p>
            </TextContainer>
            <SignUpForm setPageUnmount={(state:boolean)=>setUnmount(state)}/>
            </InnerContainer>
        </Container>
    )
}

export default withErrorIndicator(Step2Page,axios)
