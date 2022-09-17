import React,{useState} from 'react'
import ReactDom from 'react-dom'
import {Container,StyledLikeButton,StyledLoveButton,StyledDislikeButton,
    CombinedReactionsContainer,ButtonText,StyledIcon} from './style/ReactionButtons'

import ReactionOverlay from '../ReactionOverlay'

const thumbsUp=require('assets/images/icons/thumbsUp.png');
const thumbsDown=require('assets/images/icons/thumbsDown.png');
const doubleThumbsUp=require('assets/images/icons/doubleThumbsUp.png');

interface LikeButtonType{
    placeHolder?:boolean,
    onMouseEnter?:(state:boolean)=>void,
    showOverlayState?:boolean,
    setShowOverlayState?:(state:boolean)=>void
}
interface CombinedReactionsType{
    show:boolean,
    setShow:(state:boolean)=>void,
    setMovieHoverState?:React.Dispatch<React.SetStateAction<boolean>>
}

const ReactionButtons = ({setMovieHoverState}:{setMovieHoverState?:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [hoverState,setHoverState]=useState(false)
    const mouseActionHandler = (state:boolean) => {
        setHoverState(state)
    }
    const clickHandler = (event:React.MouseEvent) => {
        event.stopPropagation()
    }
    return (
       <Container onClick={clickHandler}>
           <LikeButton placeHolder onMouseEnter={mouseActionHandler}/>
           <CombinedReactions setMovieHoverState={setMovieHoverState} show={hoverState} setShow={mouseActionHandler}/>
       </Container>
    )
}

const CombinedReactions = ({show,setShow,setMovieHoverState}:CombinedReactionsType) => {
    const [showOverlay,setShowOverlay]=useState(false)
    const setShowOverlayState=(state:boolean)=>{
        setShowOverlay(state)
    }
    const setHoverState=(state:boolean)=>{
        setMovieHoverState?.(state)
    }
    return(
        <>
        <CombinedReactionsContainer onMouseLeave={()=>setShow(false)} {...{show}}>
            <DislikeButton  showOverlayState={showOverlay} setShowOverlayState={setShowOverlayState}/>
            <LikeButton showOverlayState={showOverlay} setShowOverlayState={setShowOverlayState}/>
            <LoveButton showOverlayState={showOverlay} setShowOverlayState={setShowOverlayState}/>
        </CombinedReactionsContainer>
        
        {showOverlay ?
            ReactDom.createPortal(<ReactionOverlay setMovieHoverState={setHoverState} showOverlayState={showOverlay} setShowOverlayState={setShowOverlayState}/>,document.getElementById("reactionOverlay") as HTMLElement):null}
        </>
    )
}

const LikeButton = ({placeHolder,onMouseEnter,showOverlayState,setShowOverlayState}:LikeButtonType) => {
    const [hoverState,setHoverState]=useState(false)

    const mouseEnterHandler = () => {
        onMouseEnter && onMouseEnter(true)
        setHoverState(true)
    }
    const mouseLeaveHandler = () => {
        setHoverState(false)
    }
    const onClickHandler = () => {
        setShowOverlayState?.(true)
    }
    return(
        <StyledLikeButton onClick={onClickHandler} {...{placeHolder}} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <StyledIcon src={thumbsUp}/>
            {(!placeHolder && hoverState) && <ButtonText>I like this</ButtonText>}
        </StyledLikeButton>
    )
}

const LoveButton = ({showOverlayState,setShowOverlayState}:{showOverlayState:boolean,setShowOverlayState:(state:boolean)=>void}) => {
    const [hoverState,setHoverState]=useState(false)

    const mouseEnterHandler = () => {
        setHoverState(true)
    }
    const mouseLeaveHandler = () => {
        setHoverState(false)
    }
    const onClickHandler = () => {
        setShowOverlayState(true)
    }
    return(
        <StyledLoveButton onClick={onClickHandler} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <StyledIcon src={doubleThumbsUp}/>
            {hoverState && <ButtonText>Love this!</ButtonText>}
        </StyledLoveButton>
    )
}

const DislikeButton = ({showOverlayState,setShowOverlayState}:{showOverlayState:boolean,setShowOverlayState:(state:boolean)=>void}) => {
    const [hoverState,setHoverState]=useState(false)

    const mouseEnterHandler = () => {
        setHoverState(true)
    }
    const mouseLeaveHandler = () => {
        setHoverState(false)
    }
    const onClickHandler = () => {
        setShowOverlayState(true)
    }
    return(
        <StyledDislikeButton onClick={onClickHandler} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <StyledIcon src={thumbsDown}/>
            {hoverState && <ButtonText>Not for me</ButtonText>}
        </StyledDislikeButton>
    )
}
export default ReactionButtons
