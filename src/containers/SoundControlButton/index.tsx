import React,{useState} from 'react'
import {StyledButton,StyledIcon} from './style/SoundControlButton.style'

const soundIcon= require('../../assets/images/icons/sound.png')
const muteIcon=require('../../assets/images/icons/mute.png')

interface SoundControlButtonType{
    className?: string,
    onClick:()=>void
}

const SoundControlButton = ({className,onClick}:SoundControlButtonType) => {
    const [soundState,setSoundState] =useState(false)
    const clickHandler=() => {
        onClick();
        setSoundState(soundState=>!soundState)
    }
    return (
        <StyledButton onClick={clickHandler} className={className}>
            <StyledIcon src={soundState?muteIcon:soundIcon}/>
        </StyledButton>
    )
}

export default SoundControlButton
