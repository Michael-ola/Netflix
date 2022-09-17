import React from 'react'
import {StyledButton,StyledIcon} from './style/ReplayVideoButton.style'

const soundIcon= require('../../assets/images/icons/replay.png')

interface ReplayVideoButtonType{
    className?: string,
    onClick:()=>void
}

const ReplayVideoButton = ({className,onClick}:ReplayVideoButtonType) =>{
    const clickHandler=() => {
        onClick();
    }
    return (
        <StyledButton onClick={clickHandler} className={className}>
            <StyledIcon src={soundIcon}/>
        </StyledButton>
    )
}

export default ReplayVideoButton
