import React,{useState,useEffect} from 'react'
import ReactDom from 'react-dom'
import {Container,MovieVideo,MoviePoster,
    MovieTitle,Controls,MovieDataContainer,MovieDescription,AgeRating,
    SoundControlButton,ControlsContainer,ReplayVideoButton,TopTen
} from './style/index.style'

import PlayButton from 'components/PlayButton'
import InfoButton from 'components/InfoButton'
import MovieInfoModal from 'containers/MovieInfoModal'
import useMoviesPageData from 'features/moviesPage/hooks/useMoviesPageData'

const top10Img=require('assets/images/icons/top10.png')


const MoviePreview = () => {
    const [showVideo,setShowVideo]=useState(true)
    const [soundState,setSoundState]=useState(false)
    const [showMovieInfoModal,setShowMovieInfoModal]=useState(false)
    const movieData =useMoviesPageData().moviesData[0].Movies[0];

    useEffect(() =>{
        const playTime=setTimeout(() =>{
            setShowVideo(false);
        },+movieData['trailer-duration']*1000)
        return () =>{
            clearTimeout(playTime);
        }
    },[movieData, showVideo])

    const playClicked =()=>{
        
    }
    const infoButtonClicked =()=>{
        setShowMovieInfoModal(true)
    }

    const soundControlButtonClicked=()=>{
        setSoundState(prevState=>!prevState);
    }

    const replayButtonClicked =()=>{
        setShowVideo(true);
    }

    return (
        <Container>
        {showMovieInfoModal && ReactDom.createPortal(<MovieInfoModal info={movieData}
         showState={showMovieInfoModal} setShowState={setShowMovieInfoModal}/>,document.getElementById("moreInfo") as Element)}
        <MovieDataContainer>
            <MovieTitle src={movieData["title-image"]} alt={movieData.name}/>
            {!showVideo &&
            <>
                <TopTen><img src={top10Img} alt='top ten'/> #2 in TV Shows Today</TopTen>
                <MovieDescription>
                    {movieData.descriptions["more-info"].about}
                </MovieDescription>
            </>
            }
            <Controls>
                <PlayButton onClick={playClicked}/>
                <InfoButton onClick={infoButtonClicked}/>
            </Controls> 
        </MovieDataContainer>
        <ControlsContainer>
            {!showVideo && <ReplayVideoButton onClick={replayButtonClicked}/>}
            {showVideo && <SoundControlButton onClick={soundControlButtonClicked}/>}
            <AgeRating>
                {movieData["maturity-rating"]}
            </AgeRating>
        </ControlsContainer>
        {
            showVideo?<MovieVideo poster={movieData["large-image"]}  muted={!soundState} autoPlay>
             <source  src={"https://drive.google.com/uc?export=download&id="+movieData["trailer"]} type='video/mp4'></source>
            </MovieVideo>
            :<MoviePoster src={movieData["large-image"]}/>
        }</Container>
    )
}

export default MoviePreview
