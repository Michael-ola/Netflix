import React,{useState} from 'react'
import {Button,AddIcon,ButtonText} from './style/AddButton'
const addIcon=require('../../assets/images/icons/add.png');

const AddButton = () => {
    const [hoverState,setHoverState]=useState(false)
    const mouseEnterHandler = () => {
        setHoverState(true)
    }
    const mouseLeaveHandler = () => {
        setHoverState(false)
    }
    return (
        <Button onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <AddIcon src={addIcon}/>
            {hoverState && <ButtonText>Add To My List</ButtonText>}
        </Button>
    )
}

export default AddButton
