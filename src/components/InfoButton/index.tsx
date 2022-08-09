import React from 'react'
import {MoreInfoButton,InfoIcon} from './style/InfoButton'

const infoIcon=require('../../assets/images/icons/info.png');

interface InfoButtonType {
    onClick: () =>void
}

const InfoButton = (props:InfoButtonType) => {
    return (
        <MoreInfoButton onClick={props.onClick}>
            <InfoIcon src={infoIcon}/>
            <span>More Info</span>
        </MoreInfoButton>
    )
}

export default InfoButton
