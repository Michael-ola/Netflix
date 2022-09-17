import React,{useState,useEffect,useCallback} from 'react'
import {
    Container
} from './style/MoviesCarousel'
import CarouselSlider from './CarouselSlider'
import MenuBar from './MenuBar'
import useCategoriesData from 'features/moviesPage/hooks/useCategoriesData'

const Carousel = () => {
    const [pageNumber,setPageNumber]=useState(1)
    const [totalPages,setTotalPages]=useState<number | null>(null)
    const [totalMovies,setTotalMovies]=useState<number | null>(null)
    const [hovered,setHovered] = useState(false)
    
    const data=useCategoriesData();

    useEffect(() => {
        setTotalMovies(data.Movies.length)
    },[data])

    const totalPagesHandler=useCallback(()=>{
        if(window.innerWidth>=1100){
            setTotalPages(Math.ceil(totalMovies!/5))
        }
        else if(window.innerWidth>800){
            setTotalPages(Math.ceil(totalMovies!/4))
        }
        else if(window.innerWidth>500){
            setTotalPages(Math.ceil(totalMovies!/3))
        }
        else{
            setTotalPages(Math.ceil(totalMovies!/2))
        }
    },[totalMovies])

    useEffect(() => {
        totalPagesHandler()
        if(pageNumber>totalPages!){
            setPageNumber(1)
        }
        if(pageNumber<1){
            setPageNumber(totalPages!)
        }
        window.addEventListener('resize',totalPagesHandler)
        return ()=>{
            window.removeEventListener('resize',totalPagesHandler)
        }
    },[pageNumber, totalMovies, totalPages, totalPagesHandler])

   

    const mouseEnterHandler=()=>{
        setHovered(true)
    }
    const mouseLeaveHandler=()=>{
       setHovered(false)
    }
  
    return (
        <Container {...{hovered}} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <MenuBar parentHovered={hovered} pageNumber={pageNumber} totalPages={totalPages as  number}/>
            <CarouselSlider parentHovered={hovered} setParentHovered={setHovered} setPageNumber={setPageNumber}/>
        </Container>
    )
}



export default Carousel
