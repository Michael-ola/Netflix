import React,{useState,useEffect,useRef,useCallback,useMemo} from 'react'

import { CarouselSliderContainer,CarouselSliderInnerContainer,
    CarouselRightControl,CarouselLeftControl
} from './style/CarouselSlider'
import {v4 as uuidv4} from 'uuid'

import Movie from './Movie'
import useCategoriesData from '../../hooks/useCategoriesData'
import {MoviesCollectionType} from 'types/moviesDataType'
import assignMoviePosition from 'utils/assignMoviePosition'

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
        return moviesParam.Movies?.map((movieData)=>{
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

    const generateItems=useCallback(()=>{
        let itemList:JSX.Element[]=[]
        React.Children.toArray(children).forEach((child,id)=>{
            const newElement=React.cloneElement(child as JSX.Element,{key:uuidv4()})
            itemList.push(newElement)
        })
        return itemList
    },[children])

    const endItemObserver=useMemo(()=> new IntersectionObserver((entry)=>{
        if(entry[0].isIntersecting){
            endItemObserver.unobserve(entry[0].target)
            setEndItemIntersecting(true);
            setAppendItems(prevItem=>{
                return prevItem.concat(generateItems())
            });
        }
    }),[generateItems])

    useEffect(()=>{
        const carouselChildren=innerContainerRef.current?.children;
        const carouselEndItem=carouselChildren?.[carouselChildren.length-1]
        carouselEndItem && endItemObserver.observe(carouselEndItem as Element)
        assignMoviePosition(carouselChildren as HTMLCollection)
        return ()=>{
            endItemObserver.disconnect()
        }
    },[sliderIndex, controlClicked, children, appendItems.length, endItemIntersecting, endItemObserver])

    
    return(
        <CarouselSliderInnerContainer ref={innerContainerRef}   {...{sliderIndex}} {...{controlClicked}}>
            {children}
            {endItemIntersecting? appendItems:null}    
        </CarouselSliderInnerContainer>
    )
}

export default CarouselSlider
