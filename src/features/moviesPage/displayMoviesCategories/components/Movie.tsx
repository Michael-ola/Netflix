import React,{useState,useEffect,useRef}  from 'react'
import ReactDom from 'react-dom'

import {MoviePoster,MovieDetailContainer,MovieContainer,
    MovieDetailVideo,MovieMetaContainer,ActionBarContainer,
    RatingsContainer,VideoContainer} from './style/Movie.style.js'

import MatchScore from 'components/MatchScore'
import MaturityRating from 'components/MaturityRating'
import PlayButton from 'components/PlayButton'
import AddButton from 'components/AddButton'
import ReactionButton from 'containers/ReactionButtons'
import DropdownInfoButton from 'components/DropdownInfoButton'
import Duration from 'components/Duration'
import Season from 'components/Season'
import MovieInfoModal from 'containers/MovieInfoModal'
import {MovieType} from 'types/moviesDataType'


const Movie= ({movieData}:{movieData:MovieType})=>{
    const [hoverState,setHoverState]=useState(false)
    const smallImage=movieData["small-image"] && require('assets/images/netflix/smallImages/'+movieData["small-image"]);
    const containerRef=useRef<HTMLDivElement | null>(null)

    const mouseEnterHandler = () => {
        setHoverState(true);
    }
    return(
        <MovieContainer ref={containerRef} className="movie-container" onMouseEnter={mouseEnterHandler}
          onMouseLeave={()=>setHoverState(false)}>
            <MoviePoster  className='movie-poster'  src={smallImage}/>
            <MovieDetail  movieData={movieData} hoverState={hoverState} setHoverState={setHoverState}/>
        </MovieContainer>
    )
}

export const MovieDetail=({movieData,hoverState,setHoverState}:{movieData:MovieType,hoverState:boolean,setHoverState:React.Dispatch<React.SetStateAction<boolean>>})=>{
    const [showMoreInfoState,setShowMoreInfoState]=useState(false)
    const [transformOrigin,setTransformOrigin]=useState('center')
    const containerRef=useRef<HTMLDivElement>(null)
    const videoRef=useRef<HTMLVideoElement>(null)
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

    useEffect(() => {
        const root=document.querySelector('#root') as HTMLElement;
    
        if(showMoreInfoState){
            root.style.overflow='hidden';
            videoRef?.current?.pause();
        }
        else{
            videoRef?.current?.play();
        }
        const rightPosition=containerRef.current?.getBoundingClientRect().right as number;
        const leftPosition=containerRef.current?.getBoundingClientRect().left as number;

        const right=100*(window.innerWidth - rightPosition)/window.innerWidth;
        const left=100*(leftPosition)/window.innerWidth;
        if(right<10 && right>0){
            setTransformOrigin('right')
        }
        else if(left<6){
            setTransformOrigin('left')
        }
        root.style.overflow='auto';
    },[showMoreInfoState])

    const playButtonClickedHandler=(event:React.MouseEvent)=>{
        event.stopPropagation();
        setPlayButtonClicked(true);
        videoRef?.current?.requestFullscreen();
    }

    const videoClicked=(event:React.MouseEvent) =>{
        event.stopPropagation();
        setPlayButtonClicked(true);
        videoRef?.current?.requestFullscreen();
    }

    return(
        <MovieDetailContainer ref={containerRef} {...{showMoreInfoState}} {...{hoverState}}>
           {showMoreInfoState?null:
           <>
                <VideoContainer onClick={videoClicked} >
                    <MovieDetailVideo ref={videoRef} autoPlay muted={playButtonClicked?false:true} playsInline loop poster="" {...{image:movieData['small-image']}} controls={playButtonClicked}>
                        {hoverState && <source src={"https://drive.google.com/uc?export=download&id="+movieData.trailer} type='video/mp4'></source>}
                    </MovieDetailVideo>
                </VideoContainer>
                {hoverState && 
                <MovieMetaContainer onClick={()=>setShowMoreInfoState(true)}>
                    <ActionBar setShowMoreInfoState={setShowMoreInfoState} setHoverState={setHoverState} playButtonClickedHandler={playButtonClickedHandler}/>
                    <RatingsContainer>
                        {movieData['match-score'] && <MatchScore><>{movieData['match-score']} Match</></MatchScore>}
                        <MaturityRating><>{movieData['maturity-rating']}</></MaturityRating>
                        {movieData.seasons && <Season><>{movieData.seasons} {+movieData.seasons>1?'seasons':'season'}</></Season>}
                        {movieData.duration && <Duration><>{movieData.duration && movieData.duration}</></Duration>}
                    </RatingsContainer>
                </MovieMetaContainer>
                }
            </>}
            {showMoreInfoState && ReactDom.createPortal(<MovieInfoModal transformOrigin={transformOrigin}
             info={movieData} setHoverState={setHoverState} showState={showMoreInfoState}
              setShowState={setShowMoreInfoState}/>,document.getElementById('moreInfo') as Element)}
        </MovieDetailContainer>
    )
}

const ActionBar=({setShowMoreInfoState,setHoverState,playButtonClickedHandler}:{setShowMoreInfoState:React.Dispatch<React.SetStateAction<boolean>>,setHoverState:React.Dispatch<React.SetStateAction<boolean>>,playButtonClickedHandler:(event:React.MouseEvent)=>void})=>{
    
    return(
        <ActionBarContainer>
            <PlayButton onClick={playButtonClickedHandler} round/>
            <AddButton/>
            <ReactionButton setMovieHoverState={setHoverState}/>
            <DropdownInfoButton setShowMoreInfoState={setShowMoreInfoState}/>
        </ActionBarContainer>
    )
}

export default Movie