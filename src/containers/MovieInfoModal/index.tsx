import React,{useState,useEffect} from 'react'
import {Container,InnerContainer,Video,CloseButton,CloseIcon,FirstSectionContainer,InfoText,
    TitleText,InfoTextTitle,VideoSectionContainer,FirstSectionInner1,FirstSectionInner2,
    MovieFiguresContainer,ThirdSectionInner,VideoControlsContainer,PlayButton
} from './style/MovieInfoModal.style'

import MatchScore from '../../components/MatchScore'
import Duration from '../../components/Duration'
import MaturityRating from '../../components/MaturityRating'
import Season from '../../components/Season'
import ReactionButton from '../../containers/ReactionButtons'
import AddButton from '../../components/AddButton'
import SoundControlButton from '../../containers/SoundControlButton'

const New=MatchScore
const Year =Duration
const closeIcon=require('../../assets/images/icons/close-slim.png')

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
        const body=document.querySelector('body');
        body.style.overflow='hidden';
        setMount(true)
        console.log(transformOrigin)
        return(()=>{
            body.style.overflow='auto';
        })
    },[showState])

    

    return (
        <Container {...{transformOrigin}} {...{mount}} {...{showState}}>
            <InnerContainer>
                   <CloseComponent setMount={setMount}  showComponent={setShowState} setHoverState={setHoverState} />
                   <VideoSection info={info}/>
                   <FirstSection info={info}/>
                   <ThirdSection info={info}/>
            </InnerContainer>
        </Container>
    )
}

const CloseComponent=({setMount,showComponent,setHoverState}:{setMount:React.Dispatch<React.SetStateAction<boolean>>,showComponent:(state:boolean)=>void,setHoverState:React.Dispatch<React.SetStateAction<boolean>>})=>{
    
    let timeoutId;
    useEffect(() =>{
        return()=>{
            clearTimeout(timeoutId);
        }
    },[])
    const clickHandler=()=>{
        setMount(false);
        timeoutId=setTimeout(()=>{
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

const VideoSection=({info})=>{
    const [sound,setSound]=useState(true);
    const soundButtonClicked=()=>{
        setSound(prevSound=>!prevSound);
    }
    return(
        <VideoSectionContainer>
            <Video poster={''} src={info["video"]} muted={sound}  autoPlay loop {...{image:info["small-image"]}}/>
            <VideoControlsContainer>
                <PlayButton/>
                <AddButton/>
                <ReactionButton/>
                <SoundControlButton onClick={soundButtonClicked}/>
            </VideoControlsContainer>
        </VideoSectionContainer>
    )
}

const FirstSection=({info})=>{
    return(
        <FirstSectionContainer>
            <FirstSectionInner1 style={{width:'60%'}}>
                <MovieFigures info={info}/>
                <InfoText>{info.descriptions["more-info"]?.about}</InfoText>
            </FirstSectionInner1>
            <FirstSectionInner2 style={{width:'40%'}}>
                <InfoText><InfoTextTitle>Cast:&nbsp;</InfoTextTitle>{info.descriptions["more-info"]?.cast.join(', ')}</InfoText>
                <InfoText><InfoTextTitle>Genres:&nbsp;</InfoTextTitle>{info.descriptions["more-info"]?.genres.join(', ')}</InfoText>
                <InfoText><InfoTextTitle>This Movie is:&nbsp;</InfoTextTitle>{info.descriptions["more-info"]?.feelings.join(', ')}</InfoText>
            </FirstSectionInner2>
        </FirstSectionContainer>
    )
}

const MovieFigures=({info})=>{
    const months=["january","feburary","march","april","may","june","july","august","september","october","november","december"]
    const year= new Date().getFullYear();
    const month= new Date().getMonth();
    
    return(
        <MovieFiguresContainer>
            {info.date && (info.date.year==year && info.date.month.toLowerCase()==month || info.date.month===months[month]) && <New>New</New>}
            <Year>{info.date && info.date.year}</Year>
            <MaturityRating>{info["maturity-rating"]}</MaturityRating>
            {info.seasons && <Season>{info.seasons} {info.seasons>1?'seasons':'season'}</Season>}
            {info.duration && <Duration>{info.duration}</Duration>}
        </MovieFiguresContainer>
    )
}


const ThirdSection =({info})=>{
    return(
        <ThirdSectionInner>
            <TitleText>{'About '+ info.name}</TitleText>
            <InfoText><InfoTextTitle>Cast:&nbsp;</InfoTextTitle>{info.descriptions["more-info"]?.cast.join(', ')}</InfoText>
            <InfoText><InfoTextTitle>Writer:&nbsp;</InfoTextTitle>{info.descriptions["more-info"]?.writer.join(', ')}</InfoText>
            <InfoText><InfoTextTitle>Genres:&nbsp;</InfoTextTitle>{info.descriptions["more-info"]?.genres.join(', ')}</InfoText>
            <InfoText><InfoTextTitle>This movie is:&nbsp;</InfoTextTitle>{info.descriptions["more-info"]?.feelings.join(', ')}</InfoText>
            <InfoText><InfoTextTitle>Genres:&nbsp;</InfoTextTitle>{info.descriptions["more-info"]?.genres.join(', ')}</InfoText>
            
        </ThirdSectionInner>
    )
}

export default MovieInfoModal
