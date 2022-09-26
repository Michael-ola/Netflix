import React from 'react'
import {CategoriesContainer
} from './style/MoviesCategory'
import MoviesCarousel from './MoviesCarousel';
import {CategoriesDataProvider} from 'features/moviesPage/context/MoviesCategoriesContext'
import useMoviesPageData from 'features/moviesPage/hooks/useMoviesPageData'

export default function MoviesCategory(){
   const {moviesData:categoriesData}=useMoviesPageData(); 
    
   const categoriesIterator=()=>{
    return categoriesData?.map((data,index)=>{
        return (
            <CategoriesDataProvider key={index} data={data}>
                <MoviesCarousel />
            </CategoriesDataProvider>
        )
    })
   }

    return (
        <CategoriesContainer>
            {categoriesIterator()}
        </CategoriesContainer>
    )
}