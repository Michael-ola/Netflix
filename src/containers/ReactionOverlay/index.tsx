import React,{useEffect} from 'react'
import {Container,CloseButton,CloseIcon,TitleText,Subtext,
    ThumbsSemanticsContainer,ThumbIcon,ThumbText,ThumbContainer,
    GotItButton
} from './style/ReactionOverlay'

const closeIcon=require('assets/images/icons/close-slim.png')
const thumbsUp=require('assets/images/icons/thumbs-up.png')
const thumbsDown=require('assets/images/icons/thumbs-down.png')
const doubleThumbsUp=require('assets/images/icons/db-thumbs-up.png')

interface ReactionOverlayType{
    showOverlayState:boolean,
    setShowOverlayState:(state:boolean)=>void,
    setMovieHoverState:(state:boolean)=>void
}

const ReactionOverlay = ({showOverlayState,setShowOverlayState,setMovieHoverState}:ReactionOverlayType) => {
    
    useEffect(()=>{
        const body=document.querySelector('body') as HTMLElement;
        body.style.overflow='hidden';
        
        return(()=>{
            body.style.overflow='auto';
        })
    },[])
    const gotItClicked=()=>{
        setShowOverlayState(false);
        setMovieHoverState && setMovieHoverState(false)
    }

    return (
        <Container {...{showOverlayState}}>
            <Close setShowOverlayState={setShowOverlayState} setMovieHoverState={setMovieHoverState}/>
            <Text/>
            <ThumbsSemantics/>
            <GotItButton onClick={gotItClicked}>Got it!</GotItButton>
        </Container>
    )
}

export const Close=({setShowOverlayState,setMovieHoverState}:{setShowOverlayState:(state:boolean)=>void,setMovieHoverState:(state:boolean)=>void}) => {
    const clickHandler=() => {
        setShowOverlayState(false);
        setMovieHoverState && setMovieHoverState(false)
    }
    return(
        <CloseButton  onClick={clickHandler}>
            <CloseIcon src={closeIcon}/>
        </CloseButton>
    )
}

export const Text=()=>{
    return(
        <>
            <TitleText>Rate for better recommendations.</TitleText>
            <Subtext>Your feedback helps us show you more of what you like (and love!)</Subtext>
        </>
    )
}

export const ThumbsSemantics=() => {
    return(
        <ThumbsSemanticsContainer>
            <Thumb src={thumbsDown} text={"We won't suggest this to you again"}/>
            <Thumb src={thumbsUp} text={"We'll show you more like this"}/>
            <Thumb src={doubleThumbsUp} text={"We know you're a true fan"}/>
        </ThumbsSemanticsContainer>
    )
}

export const Thumb=({src,text}:{src:string,text:string})=>{
    return(
        <ThumbContainer>
            <ThumbIcon src={src}/>
            <ThumbText>{text}</ThumbText>
        </ThumbContainer>
    )
}
export default ReactionOverlay
