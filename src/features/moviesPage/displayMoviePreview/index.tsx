import React,{useState,useEffect,useRef} from 'react'
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
    const movieData =useMoviesPageData()?.moviesData?.[0]?.Movies?.[0];
    const videoRef=useRef<HTMLVideoElement>(null);
    const [playButtonClicked,setPlayButtonClicked]=useState(false);
    
    useEffect(() => {
        const fullScreenChangeHandler=() => {
            if(document.fullscreenElement?.nodeName!=="VIDEO"){
                setPlayButtonClicked(false)
            }
        }
        document.addEventListener("fullscreenchange",fullScreenChangeHandler)
        return()=>{
            document.removeEventListener("fullscreenchange",fullScreenChangeHandler)
        }
    },[])

    useEffect(() =>{
        if(showMovieInfoModal){
           // videoRef?.current?.pause();
           setShowVideo(false)
        }

        else{
           // videoRef?.current?.play();
           setShowVideo(true)
        }
    },[showMovieInfoModal])

    useEffect(() =>{
        const playTime=setTimeout(() =>{
            setShowVideo(false);
        },+movieData?.['trailer-duration']*1000)
        return () =>{
            clearTimeout(playTime);
        }
    },[movieData, showVideo])

    const playClicked =()=>{
        setPlayButtonClicked(true);
        videoRef?.current?.requestFullscreen();
        videoRef?.current?.play();
    }
    const infoButtonClicked =()=>{
        setShowMovieInfoModal(true)
    }

    const soundControlButtonClicked=()=>{
        setSoundState(prevState=>!prevState);
    }

    const replayButtonClicked =()=>{
        setShowVideo(true);
        const current=videoRef?.current!;
        current.pause();
        current.currentTime = 0;
        current.load();
    }

    return (
        <Container>
        {showMovieInfoModal && ReactDom.createPortal(<MovieInfoModal info={movieData}
         showState={showMovieInfoModal} setShowState={setShowMovieInfoModal}/>,document.getElementById("moreInfo") as Element)}
        <MovieDataContainer>
            <MovieTitle src={movieData?.["title-image"]} alt={movieData?.name}/>
            {!showVideo &&
            <>
                <TopTen><img src={top10Img} alt='top ten'/> #2 in TV Shows Today</TopTen>
                <MovieDescription>
                    {movieData?.descriptions?.["more-info"].about}
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
                {movieData?.["maturity-rating"]}
            </AgeRating>
        </ControlsContainer>
        <MovieVideo ref={videoRef} poster={movieData?.["large-image"]} {...{showVideo}}  muted={playButtonClicked?false:!soundState} controls={playButtonClicked}  autoPlay playsInline>
            <source  src={"https://drive.google.com/uc?export=download&id="+movieData?.["trailer"]} type='video/mp4'></source>
        </MovieVideo>
        <MoviePoster src={movieData?.["large-image"]} {...{showVideo}}/>
        </Container>
    )
}

export default MoviePreview
