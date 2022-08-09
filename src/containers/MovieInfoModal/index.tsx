import React,{useState,useEffect} from 'react'
import {Container,InnerContainer,Video,CloseButton,CloseIcon,FirstSectionContainer,InfoText,
    TitleText,InfoTextTitle,VideoSectionContainer,FirstSectionInner1,FirstSectionInner2,
    MovieFiguresContainer,ThirdSectionInner
} from './style/MovieInfoModal.style'
import useMoviesPageData from '../../pages/MoviesPage/hooks/useMoviesPageData'

import MatchScore from '../../components/MatchScore'
import Duration from '../../components/Duration'
import MaturityRating from '../../components/MaturityRating'
import Season from '../../components/Season'
const New=MatchScore
const Year =Duration
const closeIcon=require('../../assets/images/icons/close-slim.png')

interface infoIdListType{
    movieID:string,
    categoryID:string
}

const MovieInfoModal = ({infoIdList}:{infoIdList:infoIdListType}) => {
    const [showModal,setShowModal]=useState(false)
    const {moviesData}=useMoviesPageData();
    const [info,setInfo]=useState({});

    useEffect(() => {
        console.log(showModal)
        const body=document.querySelector('body');
        if(showModal){
            body.style.overflow='hidden';
        }
        else{
            body.style.overflow='auto';
        }
    },[showModal])

    useEffect(() => {
        
        if(infoIdList){
            setShowModal(true);
            setInfo(getInfoFunc());
        }
    },[infoIdList])

    const getInfoFunc=()=>{
        let movieInfo={};
        moviesData.map((data)=>{
            if(data.category.id===infoIdList.categoryID){
                data.Movies.map((info,id)=>{
                    if(info.id===infoIdList.movieID){
                        movieInfo=info
                    }
                })
            }
         })
         return movieInfo
    }

    return (
        <Container {...{showModal}}>{
           info &&
               <InnerContainer>
                   <CloseComponent setShowModal={setShowModal}/>
                   <VideoSection info={info}/>
                   <FirstSection info={info}/>
                   <ThirdSection info={info}/>
               </InnerContainer>
        }</Container>
    )
}

const CloseComponent=({setShowModal}:{setShowModal:React.Dispatch<React.SetStateAction<boolean>>})=>{
    return (
        <CloseButton onClick={()=>setShowModal(false)}>
            <CloseIcon src={closeIcon}/>
        </CloseButton>
    )
}

const VideoSection=({info})=>{
    return(
        <VideoSectionContainer>
            <Video poster={`${info["large-image"]}`}/>
        </VideoSectionContainer>
    )
}

const FirstSection=({info})=>{
    console.log(info)
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
