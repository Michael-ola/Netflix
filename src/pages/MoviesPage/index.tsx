import React,{useState,useMemo,useEffect} from 'react'
import {Container,MoreInfo} from './styles/index.style'
import Navbar from 'features/moviesPage/layout/Navbar'
import MoviePreview from 'features/moviesPage/displayMoviePreview'
import MoviesCategory from 'features/moviesPage/displayMoviesCategories/components'
import Footer from 'features/moviesPage/layout/Footer'
import {MoviesPageContextProvider} from 'features/moviesPage/context/MoviesPageContext'
import { MoviesCollectionType } from 'types/moviesDataType'
import { getMoviesData } from 'services/firebase/getMoviesData'
import Preloader from 'containers/Preloader'
import withErrorIndicator from 'HOC/withErrorIndicator'
import axios  from 'axios'

const MoviesPage = () => {
    const [isSearchText,setIsSearchText] =useState(false);
    const [moviesData,setMoviesData] =useState<MoviesCollectionType[]>([]);

    useEffect(() => {
        movies()
    },[])

    const movies=async ()=>{
        const data=await getMoviesData();
        setMoviesData(data)
    }

    const contextData=useMemo(()=>{
        return {
            moviesData:moviesData,
            setIsSearchText:setIsSearchText,
            isSearchText:isSearchText
        }
    },[isSearchText, moviesData])

    return (
        <MoviesPageContextProvider data={contextData}>{
        moviesData.length>0?
        <Container {...{isSearchText}}>
            <div id="reactionOverlay"></div>
            <MoreInfo id="moreInfo"></MoreInfo>
            <Navbar/>
            <div id="searchDisplay" style={{display: isSearchText?'block':'none'}}></div>
            {!isSearchText && moviesData.length > 0 &&<>
                <MoviePreview/>
                <MoviesCategory/>
                </>
            }
            <Footer/>
        </Container>:
        <Preloader/>
        }
        </MoviesPageContextProvider>
    )
}
export default withErrorIndicator(MoviesPage,axios);
