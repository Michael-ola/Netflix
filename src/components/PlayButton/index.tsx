import React from 'react'
import {PlayButtonContainer,PlayIcon} from './style/PlayButton'
const playIcon=require('../../assets/images/icons/play.png');

interface PlayButtonType{
    onClick:(event:React.MouseEvent)=>void,
    round?:boolean,
    className?:string
}

const PlayButton = (props:PlayButtonType) => {
    return (
        <PlayButtonContainer className={props.className} {...{round:props.round}} onClick={props.onClick}>
            <PlayIcon {...{round:props.round}} src={playIcon}/>
            <span style={props?.round ?{display: 'none'}:{}}>Play</span>
        </PlayButtonContainer>
    )
}

export default PlayButton
