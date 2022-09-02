import React,{useContext} from 'react';
import {Message} from './styles/ErrorMessage'
import {InputContext} from '../../context/InputContext'

const ErrorMessage=() =>{
    const context=useContext(InputContext)
    const font=(context.customStyle?.errorFontSize)
    const message=(context.errors?.message)
    return <Message {...(font && {font:font})} >{message}</Message>
}


export default  ErrorMessage