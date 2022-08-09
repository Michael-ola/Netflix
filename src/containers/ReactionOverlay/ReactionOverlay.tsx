import React from 'react'
import {Container,CloseButton,CloseIcon,TitleText,Subtext,
    ThumbsSemanticsContainer,ThumbIcon,ThumbText,ThumbContainer,
    GotItButton
} from './style/ReactionOverlay'
import useMoviesPageData from '../../pages/MoviesPage/hooks/useMoviesPageData'
const closeIcon=require('../../assets/images/icons/close-slim.png')
const thumbsUp=require('../../assets/images/icons/thumbsUp-w.png')
const thumbsDown=require('../../assets/images/icons/thumbsDown-w.png')
const doubleThumbsUp=require('../../assets/images/icons/doubleThumbsUp.png')

const ReactionOverlay = () => {
    const {reactionOverlayData}=useMoviesPageData()

    return (
        <Container {...{showState:reactionOverlayData.showOverlay}}>
            <Close/>
            <Text/>
            <ThumbsSemantics/>
            <GotItButton onClick={reactionOverlayData.closeOverlay}>Got it!</GotItButton>
        </Container>
    )
}

export const Close=() => {
    const {reactionOverlayData}=useMoviesPageData()
    return(
        <CloseButton  onClick={reactionOverlayData.closeOverlay}>
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
