import React,{useState,useEffect,useRef,useCallback} from 'react'
import ReactDom from 'react-dom'

import { CarouselSliderContainer,
    MoviePoster,CarouselSliderInnerContainer,
    CarouselRightControl,CarouselLeftControl,MovieDetailContainer,MovieContainer,
    MovieDetailVideo,MovieMetaContainer,ActionBarContainer,
    RatingsContainer
} from './style/CarouselSlider'

import MatchScore from 'components/MatchScore'
import MaturityRating from 'components/MaturityRating'
import PlayButton from 'components/PlayButton'
import AddButton from 'components/AddButton'
import ReactionButton from 'containers/ReactionButtons'
import DropdownInfoButton from 'components/DropdownInfoButton'
import Duration from 'components/Duration'
import Season from 'components/Season'
import MovieInfoModal from 'containers/MovieInfoModal'
import useCategoriesData from '../../hooks/useCategoriesData'
import {MoviesCollectionType,MovieType} from 'types/moviesDataType'

interface CarouselSliderType{
    parentHovered:boolean,
    setParentHovered?:React.Dispatch<React.SetStateAction<boolean>>,
    setPageNumber:React.Dispatch<React.SetStateAction<number>>
}
interface CarouselSliderInnerType{
    children:React.ReactNode,
    sliderIndex:number,
    controlClicked:string
}


const CarouselSlider = ({parentHovered,setPageNumber,setParentHovered}:CarouselSliderType)=>{
    const [controlClicked,setControlClicked]=useState('')
    const [sliderIndex,setSliderIndex]=useState(0)
    const [startPosition,setStartPosition]=useState(0);
    const [touchEndState,setTouchEndState]=useState(false);
    const [currentPosition,setCurrentPosition]=useState(0);
    const movies=useCategoriesData()
    const carouselRef=useRef<HTMLDivElement>(null);

    const swipeHandler=useCallback((control:string)=>{
        setControlClicked(control);
        if(control==='right'){
            setSliderIndex((currentSliderIndex:number) =>currentSliderIndex +1); 
            setPageNumber((currentPage:number) =>currentPage +1); 
        }
        else if(control==='left'){
            if(sliderIndex<=0){
                setSliderIndex(0)
                setPageNumber(1)
            }
            else{
                setSliderIndex((currentSliderIndex:number) =>currentSliderIndex -1); 
                setPageNumber((currentPage:number) =>currentPage -1);
            }  
        }
    },[setPageNumber, sliderIndex])

    const touchStart=useCallback((event:TouchEvent)=>{
        setParentHovered?.(true);
        setStartPosition(event.touches[0].clientX);
    },[setParentHovered])

    const touchMove=useCallback((event:TouchEvent)=>{
        setCurrentPosition(event.touches[0].clientX);
    },[])

    const touchEnd=useCallback((event:TouchEvent)=>{
        setTouchEndState(true);
    },[])

    useEffect(()=>{
        const current=carouselRef.current;
        current?.addEventListener("touchstart",touchStart);
        current?.addEventListener("touchmove",touchMove);
        current?.addEventListener("touchend",touchEnd);
        return ()=>{
            current?.removeEventListener("touchstart",touchStart);
            current?.removeEventListener("touchmove",touchMove);
            current?.removeEventListener("touchend",touchEnd);
        }
    },[touchStart,touchMove,touchEnd])

    useEffect(() => {
        if(currentPosition < startPosition  && currentPosition!==0  && touchEndState){
            swipeHandler('right');
            setTouchEndState(false);
        }
        else if(currentPosition > startPosition && currentPosition!==0  &&  touchEndState){
            swipeHandler('left');
            setTouchEndState(false);
        }
    },[startPosition, touchEndState, currentPosition, swipeHandler])

    const moviesIterator=(moviesParam:MoviesCollectionType)=>{
        return moviesParam.Movies.map((movieData)=>{
            const appendedData={...movieData,categoryId:moviesParam.category.id}
            return(
                 <Movie  key={movieData.id} movieData={appendedData}/>
            )
        })
    }
    return(
        <CarouselSliderContainer ref={carouselRef}>
            {!startPosition && 
            <CarouselLeftControl {...{controlClicked,parentHovered}} onClick={()=>{swipeHandler('left')}}>
                <span>&lsaquo;</span>
            </CarouselLeftControl>
            }
            <CarouselSliderInner sliderIndex={sliderIndex} controlClicked={controlClicked}>
                {moviesIterator(movies)}
            </CarouselSliderInner>
            {!startPosition && 
            <CarouselRightControl {...{parentHovered}} onClick={()=>{swipeHandler('right')}}>
               <span>&rsaquo;</span>
            </CarouselRightControl>
            }
        </CarouselSliderContainer>
    )
}

const CarouselSliderInner=({children,sliderIndex,controlClicked}:CarouselSliderInnerType)=>{
    const [endItemIntersecting,setEndItemIntersecting]=useState(false)
    const innerContainerRef=useRef<HTMLDivElement>(null)
    const [appendItems,setAppendItems]=useState<JSX.Element[]>([]);

    useEffect(()=>{
        const carouselChildren=innerContainerRef.current?.children;
        const carouselEndItem=carouselChildren?.[carouselChildren.length-1]
        endItemObserver.observe(carouselEndItem as Element)
        assignMovieJustification(carouselChildren as HTMLCollection)
        return ()=>{
            endItemObserver.disconnect()
        }
    },[sliderIndex, controlClicked, children, appendItems.length, endItemIntersecting])

    const assignMovieJustification=(carouselChildren:HTMLCollection) => {
        for(let i=0; i<carouselChildren.length; i++){
            const child=carouselChildren[i] as HTMLElement;
            const right=100*(window.innerWidth - child.getBoundingClientRect().right)/window.innerWidth;
            const left=100*(child.getBoundingClientRect().left)/window.innerWidth;
            if(right<10 && right>0){
                child.style.justifyContent='flex-end';
                child.style.transformOrigin='right';
            }
            else if(left<6){
                child.style.justifyContent='flex-start';
                child.style.transformOrigin='left';
            }
        }
    }
    const generateItems=() =>{
        let itemList:JSX.Element[]=[]
        React.Children.toArray(children).forEach((child,id)=>{
            const randomID=Math.random().toString(36).substring(1,9);
            const newElement=React.cloneElement(child as JSX.Element,{key:randomID})
            itemList.push(newElement)
        })
        return itemList
    }

    const endItemObserver= new IntersectionObserver((entry)=>{
        if(entry[0].isIntersecting){
            endItemObserver.unobserve(entry[0].target)
            setEndItemIntersecting(true);
            setAppendItems(prevItem=>{
                return prevItem.concat(generateItems())
            });
        }
    })

    
    return(
        <CarouselSliderInnerContainer ref={innerContainerRef}   {...{sliderIndex}} {...{controlClicked}}>
            {children}
            {endItemIntersecting? appendItems:null}    
        </CarouselSliderInnerContainer>
    )
}


const Movie= ({movieData}:{movieData:MovieType})=>{
    const [hoverState,setHoverState]=useState(false)

    return(
        <MovieContainer onMouseEnter={()=>setHoverState(true)}
          onMouseLeave={()=>setHoverState(false)}>
            <MoviePoster  src={require('assets/images/netflix/smallImages/'+movieData["small-image"])}/>
            <MovieDetail movieData={movieData} hoverState={hoverState} setHoverState={setHoverState}/>
        </MovieContainer>
    )
}

export const MovieDetail=({movieData,hoverState,setHoverState}:{movieData:MovieType,hoverState:boolean,setHoverState:React.Dispatch<React.SetStateAction<boolean>>,})=>{
    const [showMoreInfoState,setShowMoreInfoState]=useState(false)
    const [transformOrigin,setTransformOrigin]=useState('')
    const containerRef=useRef<HTMLDivElement>(null)

    useEffect(() => {
        const root=document.querySelector('#root') as HTMLElement;
        if(showMoreInfoState){
            root.style.overflow='hidden';
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

    return(
        <MovieDetailContainer ref={containerRef} {...{showMoreInfoState}} {...{hoverState}}>
           {showMoreInfoState?null:
           <><MovieDetailVideo autoPlay muted loop poster="" {...{image:movieData['small-image']}}>
            {hoverState && <source src={"https://drive.google.com/uc?export=download&id="+movieData.trailer} type='video/mp4'></source>}
           </MovieDetailVideo>
                {hoverState && <MovieMetaContainer onClick={()=>setShowMoreInfoState(true)}>
                    <ActionBar setShowMoreInfoState={setShowMoreInfoState} setHoverState={setHoverState} />
                    <RatingsContainer>
                        {movieData['match-score'] && <MatchScore><>{movieData['match-score']} Match</></MatchScore>}
                        <MaturityRating><>{movieData['maturity-rating']}</></MaturityRating>
                        {movieData.seasons && <Season><>{movieData.seasons} {+movieData.seasons>1?'seasons':'season'}</></Season>}
                        {movieData.duration && <Duration><>{movieData.duration && movieData.duration}</></Duration>}
                    </RatingsContainer>
                </MovieMetaContainer>}
            </>}
            {showMoreInfoState && ReactDom.createPortal(<MovieInfoModal transformOrigin={transformOrigin}
             info={movieData} setHoverState={setHoverState} showState={showMoreInfoState}
              setShowState={setShowMoreInfoState}/>,document.getElementById('moreInfo') as Element)}
        </MovieDetailContainer>
    )
}

const ActionBar=({setShowMoreInfoState,setHoverState}:{setShowMoreInfoState:React.Dispatch<React.SetStateAction<boolean>>,setHoverState:React.Dispatch<React.SetStateAction<boolean>>})=>{
    const playButtonClickedHandler=()=>{

    }
    return(
        <ActionBarContainer>
            <PlayButton onClick={playButtonClickedHandler} round/>
            <AddButton/>
            <ReactionButton setMovieHoverState={setHoverState}/>
            <DropdownInfoButton setShowMoreInfoState={setShowMoreInfoState}/>
        </ActionBarContainer>
    )
}
export default CarouselSlider
