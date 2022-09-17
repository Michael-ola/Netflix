import React,{useMemo} from 'react'
import {Container,MoreInfo} from './styles/index.style'
import Navbar from 'features/moviesPage/layout/Navbar'
import MoviePreview from 'features/moviesPage/displayMoviePreview'
import MoviesCategory from 'features/moviesPage/displayMoviesCategories/components'
import Footer from 'features/moviesPage/layout/Footer'
import {MoviesPageContextProvider} from 'features/moviesPage/context/MoviesPageContext'
import withErrorIndicator from 'HOC/withErrorIndicator'
import axios  from 'axios'

const moviesData=require('data/movieCategories.json');

const MoviesPage = () => {

    const contextData=useMemo(()=>{
        return {
            moviesData:moviesData
        }
    },[])

    return (
        <MoviesPageContextProvider data={contextData}>
        <Container>
            <div id="searchDisplay"></div>
            <div id="reactionOverlay"></div>
            <MoreInfo id="moreInfo"></MoreInfo>
            <Navbar/>
            <MoviePreview/>
            <MoviesCategory/>
            <Footer/>
        </Container>
        </MoviesPageContextProvider>
    )
}
export default withErrorIndicator(MoviesPage,axios)
