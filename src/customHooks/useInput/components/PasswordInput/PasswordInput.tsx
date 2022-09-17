import React,{useState,useContext} from 'react'
import {ShowHideButton} from  './styles/PasswordInput'
import {Span} from '../../styles/useInput'
import TextOrEmailField from '../TextOrEmailField/TextOrEmailField'
import {InputContext} from '../../context/InputContext'

const PasswordInput=()=>{
    const context=useContext(InputContext)
    const [clickState,setClickState]=useState(false)

    const buttonClickedHandler=(event:React.MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault()
        setClickState(!clickState)
        context?.labelClickedHandler()
    }
    return(
    <>
        <TextOrEmailField type={clickState?'text':'password'} />
        <ShowHideButton onClick={(event)=>buttonClickedHandler(event)} 
            {...{labelClicked:context?.labelClickState,error:context?.errors?true:false}}>
            <Span>{clickState?'HIDE':'SHOW'}</Span>
        </ShowHideButton>
    </>
    )
}

export default PasswordInput