import React,{useState,useEffect,useRef} from 'react'
import {Container,InnerContainer,Video,CloseButton,CloseIcon,FirstSectionContainer,InfoText,
    TitleText,InfoTextTitle,VideoSectionContainer,FirstSectionInner1,FirstSectionInner2,
    MovieFiguresContainer,ThirdSectionInner,VideoControlsContainer,PlayButton
} from './style/MovieInfoModal.style'

import MatchScore from 'components/MatchScore'
import Duration from 'components/Duration'
import MaturityRating from 'components/MaturityRating'
import Season from 'components/Season'
import ReactionButton from 'containers/ReactionButtons'
import AddButton from 'components/AddButton'
import SoundControlButton from 'containers/SoundControlButton'
import {MovieType} from 'types/moviesDataType'

const New=MatchScore
const Year =Duration
const closeIcon=require('assets/images/icons/close-slim.png')

interface MovieModalType{
    info:any,
    showState:boolean,
    setShowState:React.Dispatch<React.SetStateAction<boolean>>,
    setHoverState?:React.Dispatch<React.SetStateAction<boolean>>,
    transformOrigin?:string
}

const MovieInfoModal = ({info,showState,setShowState,setHoverState,transformOrigin}:MovieModalType) => {
    const [mount,setMount]=useState(false)

    useEffect(() => {
        const body=document.querySelector('body') as HTMLElement;
        body.style.overflow='hidden';
        setMount(true)
        return(()=>{
            body.style.overflow='auto';
        })
    },[showState, transformOrigin])

    

    return (
        <Container {...{transformOrigin}} {...{mount}} {...{showState}}>
            <InnerContainer>
                   <CloseComponent setMount={setMount}  showComponent={setShowState} setHoverState={setHoverState!} />
                   <VideoSection info={info} showComponent={showState}/>
                   <FirstSection info={info}/>
                   <ThirdSection info={info}/>
            </InnerContainer>
        </Container>
    )
}

const CloseComponent=({setMount,showComponent,setHoverState}:{setMount:React.Dispatch<React.SetStateAction<boolean>>,showComponent:(state:boolean)=>void,setHoverState:React.Dispatch<React.SetStateAction<boolean>>})=>{

    const clickHandler=()=>{
        setMount(false);
        setTimeout(()=>{
            showComponent(false)
        },100)
        setHoverState?.(false)
    }

    return (
        <CloseButton onClick={clickHandler}>
            <CloseIcon src={closeIcon}/>
        </CloseButton>
    )
}

const VideoSection=({info,showComponent}:{info:MovieType,showComponent:boolean})=>{
    const [sound,setSound]=useState(true);
    const [playButtonClicked,setPlayButtonClicked]=useState(false);
    const videoRef=useRef<HTMLVideoElement  | null>(null);

    useEffect(() => {
        if(showComponent===false){
            setPlayButtonClicked(false);
            videoRef?.current?.pause();
        }
        const fullScreenChangeHandler=() => {
            if(document.fullscreenElement?.nodeName!=="VIDEO"){
                setPlayButtonClicked(false)
            }
        }
        document.addEventListener("fullscreenchange",fullScreenChangeHandler)
        return()=>{
            document.removeEventListener("fullscreenchange",fullScreenChangeHandler)
        }
    },[showComponent])

    const soundButtonClicked=()=>{
        setSound(prevSound=>!prevSound);
    }
    const playClicked=()=>{
        setPlayButtonClicked(true);
        videoRef?.current?.requestFullscreen();
    }
    return(
        <VideoSectionContainer>
            <Video ref={videoRef} poster={''} muted={playButtonClicked?false:sound} controls={playButtonClicked}  autoPlay loop playsInline {...{image:info["small-image"]}}>
            <source src={"https://drive.google.com/uc?export=download&id="+info["trailer"]} type='video/mp4'></source>
            </Video>
            <VideoControlsContainer>
                <PlayButton onClick={playClicked}/>
                <AddButton/>
                <ReactionButton/>
                <SoundControlButton onClick={soundButtonClicked}/>
            </VideoControlsContainer>
        </VideoSectionContainer>
    )
}

const FirstSection=({info}:{info:MovieType})=>{
    const infoValue=info.descriptions["more-info"];
    return(
        <FirstSectionContainer>
            <FirstSectionInner1 style={{width:'60%'}}>
                <MovieFigures info={info}/>
                <InfoText>{info.descriptions["more-info"]?.about}</InfoText>
            </FirstSectionInner1>
            <FirstSectionInner2 style={{width:'40%'}}>
                {infoValue?.cast[0] && <InfoText><InfoTextTitle>Cast:&nbsp;</InfoTextTitle>{infoValue?.cast.join(', ')}</InfoText>}
                {infoValue?.genres[0] && <InfoText><InfoTextTitle>Genres:&nbsp;</InfoTextTitle>{infoValue?.genres.join(', ')}</InfoText>}
                {infoValue?.feelings[0] && <InfoText><InfoTextTitle>This movie is:&nbsp;</InfoTextTitle>{infoValue?.feelings.join(', ')}</InfoText>}
            </FirstSectionInner2>
        </FirstSectionContainer>
    )
}

const MovieFigures=({info}:{info:MovieType})=>{
    const months=["january","feburary","march","april","may","june","july","august","september","october","november","december"]
    const year= new Date().getFullYear();
    const month= new Date().getMonth();
    
    return(
        <MovieFiguresContainer>
            {info.date && ((+info.date.year===year && +info.date.month.toLowerCase()===month) || info.date.month===months[month]) && <New><>New</></New>}
            {info['match-score'] && <MatchScore><>{info['match-score']} Match</></MatchScore>}
            <Year><>{info.date && info.date.year}</></Year>
            <MaturityRating><>{info["maturity-rating"]}</></MaturityRating>
            {info.seasons && <Season><>{info.seasons} {+info.seasons>1?'seasons':'season'}</></Season>}
            {info.duration && <Duration><>{info.duration}</></Duration>}
        </MovieFiguresContainer>
    )
}


const ThirdSection =({info}:{info:MovieType})=>{
    const infoValue=info.descriptions["more-info"];
    return(
        <ThirdSectionInner>
            <TitleText>{'About '+ info.name}</TitleText>
            {infoValue?.cast[0] && <InfoText><InfoTextTitle>Cast:&nbsp;</InfoTextTitle>{infoValue?.cast.join(', ')}</InfoText>}
            {infoValue?.writer[0] && <InfoText><InfoTextTitle>Writer:&nbsp;</InfoTextTitle>{infoValue?.writer.join(', ')}</InfoText>}
            {infoValue?.genres[0] && <InfoText><InfoTextTitle>Genres:&nbsp;</InfoTextTitle>{infoValue?.genres.join(', ')}</InfoText>}
            {infoValue?.feelings[0] && <InfoText><InfoTextTitle>This movie is:&nbsp;</InfoTextTitle>{infoValue?.feelings.join(', ')}</InfoText>}
            
        </ThirdSectionInner>
    )
}

export default MovieInfoModal
