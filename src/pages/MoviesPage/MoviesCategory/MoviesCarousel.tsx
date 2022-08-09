import React,{useState,useEffect} from 'react'
import {
    Container
} from './style/MoviesCarousel'
import CarouselSlider from './CarouselSlider'
import MenuBar from './MenuBar'
import useCategoriesData from '../hooks/useCategoriesData'

const Carousel = () => {
    const [pageNumber,setPageNumber]=useState(1)
    const [totalPages,setTotalPages]=useState<number>(null)
    const [totalMovies,setTotalMovies]=useState<number>(null)
    const [hovered,setHovered] = useState(false)
    const data=useCategoriesData();

    useEffect(() => {
        setTotalMovies(data.Movies.length)
    },[data])

    useEffect(() => {
        totalPagesHandler()
        if(pageNumber>totalPages){
            setPageNumber(1)
        }
        if(pageNumber<1){
            setPageNumber(totalPages)
        }
        window.addEventListener('resize',totalPagesHandler)
        return ()=>{
            window.removeEventListener('resize',totalPagesHandler)
        }
    },[pageNumber,totalMovies])

    const totalPagesHandler=()=>{
        if(window.innerWidth>=1100){
            setTotalPages(Math.ceil(totalMovies/5))
        }
        else if(window.innerWidth>800){
            setTotalPages(Math.ceil(totalMovies/4))
        }
        else if(window.innerWidth>500){
            setTotalPages(Math.ceil(totalMovies/3))
        }
        else{
            setTotalPages(Math.ceil(totalMovies/2))
        }
    }
    const mouseEnterHandler=()=>{
        setHovered(true)
    }
    const mouseLeaveHandler=()=>{
        setHovered(false)
    }
    return (
        <Container onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <MenuBar parentHovered={hovered} pageNumber={pageNumber} totalPages={totalPages}/>
            <CarouselSlider parentHovered={hovered} setPageNumber={setPageNumber}/>
        </Container>
    )
}



export default Carousel
