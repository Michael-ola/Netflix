import React,{useState} from 'react';
import {
    MenuBarContainer,ProgressBarContainer,ProgressItem,Category,Title,
    SlideItem,SlideText,SlideArrow
} from './style/MenuBar'

import useCategoriesData from 'features/moviesPage/hooks/useCategoriesData'

interface MenuBarType{
    parentHovered:boolean,
    pageNumber:number,
    totalPages:number
}

interface ProgressBarType{
    totalPages:number,
    pageNumber:number,
    showProgressBar:boolean
}

interface CarouselTitleType{
    showSlideArrow:boolean
}


const MenuBar = ({parentHovered,pageNumber,totalPages}:MenuBarType) => {
    return (
        <MenuBarContainer>
            <CarouselTitle showSlideArrow={parentHovered}/>
            <ProgressBar totalPages={totalPages} pageNumber={pageNumber} showProgressBar={parentHovered}/>
        </MenuBarContainer>
    )
}

const ProgressBar = ({totalPages,pageNumber,showProgressBar}:ProgressBarType)=>{
    const generateProgressItem=()=>{
        const itemsArr:JSX.Element[]=[]
        for(let i=1; i<=totalPages; i++){
            itemsArr.push(<ProgressItem style={{background:i===pageNumber ?'#e5e5e5':''}} key={i}/>)
        }   
        return itemsArr 
    }

    return(
        <ProgressBarContainer {...{showProgressBar}}>
            {generateProgressItem()}
        </ProgressBarContainer>
    )
}


const CarouselTitle=({showSlideArrow}:CarouselTitleType)=>{
    const [slideItem,setSlideItem]=useState(false)
    const carouselTitle=useCategoriesData().category.title

    const slideItemHoverHandler=(state:boolean)=>{
        setSlideItem(state);
    }
    return(
        <Category onMouseEnter={()=>slideItemHoverHandler(true)}
            onMouseLeave={()=>slideItemHoverHandler(false)}>
            <Title>{carouselTitle}</Title>
            <SlideItem>
                <SlideText {...{slideItem}}><span>{'Explore All'}</span></SlideText>
                <SlideArrow {...{slideItem}} {...{showSlideArrow}}><span>&rsaquo;</span></SlideArrow>
            </SlideItem>
        </Category>
    )
}

export default MenuBar
