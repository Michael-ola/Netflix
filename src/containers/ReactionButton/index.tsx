import React,{useState} from 'react'
import {Container,StyledLikeButton,StyledLoveButton,StyledDislikeButton,
    CombinedReactionsContainer,ButtonText,StyledIcon} from './style/ReactionButton'
import useMoviesPageData from '../../pages/MoviesPage/hooks/useMoviesPageData'

const thumbsUp=require('../../assets/images/icons/thumbsUp.png');
const thumbsDown=require('../../assets/images/icons/thumbsDown.png');
const doubleThumbsUp=require('../../assets/images/icons/doubleThumbsUp.png');

interface LikeButtonType{
    placeHolder?:boolean,
    onMouseEnter?:(state:boolean)=>void
}


const ReactionButton = () => {
    const [hoverState,setHoverState]=useState(false)
    const mouseActionHandler = (state:boolean) => {
        setHoverState(state)
    }
    return (
       <Container>
           <LikeButton placeHolder onMouseEnter={mouseActionHandler}/>
           <CombinedReactions show={hoverState} setShow={mouseActionHandler}/>
       </Container>
    )
}

const CombinedReactions = ({show,setShow}:{show:boolean,setShow:(state:boolean)=>void}) => {
    const reactionOverlayData=useMoviesPageData()
   
    return(
        <CombinedReactionsContainer onMouseLeave={()=>setShow(false)} {...{show}}>
            <DislikeButton/>
            <LikeButton/>
            <LoveButton/>
        </CombinedReactionsContainer>
    )
}

const LikeButton = ({placeHolder,onMouseEnter}:LikeButtonType) => {
    const [hoverState,setHoverState]=useState(false)
    const {reactionOverlayData}=useMoviesPageData()

    const mouseEnterHandler = () => {
        onMouseEnter && onMouseEnter(true)
        setHoverState(true)
    }
    const mouseLeaveHandler = () => {
        setHoverState(false)
    }
    const onClickHandler = () => {
        reactionOverlayData.setShowOverlay();
    }
    return(
        <StyledLikeButton onClick={onClickHandler} {...{placeHolder}} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <StyledIcon src={thumbsUp}/>
            {(!placeHolder && hoverState) && <ButtonText>I like this</ButtonText>}
        </StyledLikeButton>
    )
}

const LoveButton = () => {
    const [hoverState,setHoverState]=useState(false)
    const {reactionOverlayData}=useMoviesPageData()

    const mouseEnterHandler = () => {
        setHoverState(true)
    }
    const mouseLeaveHandler = () => {
        setHoverState(false)
    }
    const onClickHandler = () => {
        reactionOverlayData.setShowOverlay();
    }
    return(
        <StyledLoveButton onClick={onClickHandler} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <StyledIcon src={doubleThumbsUp}/>
            {hoverState && <ButtonText>Love this!</ButtonText>}
        </StyledLoveButton>
    )
}

const DislikeButton = () => {
    const [hoverState,setHoverState]=useState(false)
    const {reactionOverlayData}=useMoviesPageData()

    const mouseEnterHandler = () => {
        setHoverState(true)
    }
    const mouseLeaveHandler = () => {
        setHoverState(false)
    }
    const onClickHandler = () => {
        reactionOverlayData.setShowOverlay()
    }
    return(
        <StyledDislikeButton onClick={onClickHandler} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <StyledIcon src={thumbsDown}/>
            {hoverState && <ButtonText>Not for me</ButtonText>}
        </StyledDislikeButton>
    )
}
export default ReactionButton
