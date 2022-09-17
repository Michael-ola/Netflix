import React,{useState} from 'react'
import {StyledButton,StyledIcon,ButtonText} from './style/DropdownInfoButton'

const dropDownIcon=require('assets/images/icons/chevron-right.png');

const DropdownInfoButton =({setShowMoreInfoState}:{setShowMoreInfoState:(state:boolean)=>void}) => {

    const [hoverState,setHoverState]=useState(false)
   
    const mouseEnterHandler = () => {
        setHoverState(true)
    }
    const mouseLeaveHandler = () => {
        setHoverState(false)
    }
    const onClickHandler = (event:React.MouseEvent) => {
        event.stopPropagation()
        setShowMoreInfoState(true)
    }

    return (
        <StyledButton onClick={onClickHandler} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <StyledIcon src={dropDownIcon}/>
            {hoverState && <ButtonText>More info!</ButtonText>}
        </StyledButton>
    )
}

export default DropdownInfoButton
