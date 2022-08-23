import React,{useState,useEffect,useMemo} from 'react'
import {Container,MoreInfo} from './styles/index.style'
import Navbar from './Navbar'
import MoviePreview from './MoviePreview'
import MoviesCategory from './MoviesCategory/MoviesCategory'
import Footer from './Footer'
import {MoviesPageContextProvider} from './context/MoviesPageContext'
const moviesData=require('../../data/movieCategories.json');

const MoviesPage = () => {

    const contextData=useMemo(()=>{
        return {
            moviesData:moviesData
        }
    },[])

    return (
        <MoviesPageContextProvider data={contextData}>
        <Container>
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
export default MoviesPage
