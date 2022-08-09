import React from 'react'
import {CategoriesContainer
} from './style/MoviesCategory'
import MoviesCarousel from './MoviesCarousel';
import {CategoriesDataProvider} from '../context/MoviesCategoriesContext'
import useMoviesPageData from '../hooks/useMoviesPageData'

export default function MoviesCategory(){
   const {moviesData:categoriesData}=useMoviesPageData(); 
    
   const categoriesIterator=(categoriesData)=>{
    return categoriesData.map((data)=>{
        return (
            <CategoriesDataProvider key={data.category.id} data={data}>
                <MoviesCarousel />
            </CategoriesDataProvider>
        )
    })
   }

    return (
        <CategoriesContainer>
            {categoriesIterator(categoriesData)}
        </CategoriesContainer>
    )
}