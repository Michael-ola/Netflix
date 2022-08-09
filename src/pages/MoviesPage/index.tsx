import React,{useState,useEffect,useMemo} from 'react'
import {Container} from './styles/indexStyle'
import Navbar from './Navbar'
import MoviePreview from './MoviePreview'
import MoviesCategory from './MoviesCategory/MoviesCategory'
import Footer from './Footer'
import ReactionOverlay from '../../containers/ReactionOverlay/ReactionOverlay'
import MovieInfoModal from '../../containers/MovieInfoModal'
import {MoviesPageContextProvider} from './context/MoviesPageContext'
const moviesData=require('../../fixtures/movieCategories.json');


interface MovieInfoIdListType{
    movieID:string,
    categoryID:string
}
const MoviesPage = () => {
    const [showOverlay,setShowOverlay]=useState(false)
    const [movieInfoIdList,setMovieInfoIdList] = useState<MovieInfoIdListType>(null)

    const contextData=useMemo(()=>{
        return {
            reactionOverlayData:{
                showOverlay,
                setShowOverlay:()=>setShowOverlay(true),
                closeOverlay:()=>setShowOverlay(false)
            },
            movieInfoData:{
                setMovieInfoIdList:(idList:MovieInfoIdListType) =>setMovieInfoIdList(idList)
            },
            moviesData:moviesData
        }
    },[showOverlay])

    return (
        <MoviesPageContextProvider data={contextData}>
        <Container>
            <MovieInfoModal  infoIdList={movieInfoIdList}/>
            <ReactionOverlay/>
            <Navbar/>
            <MoviePreview/>
            <MoviesCategory/>
            <Footer/>
        </Container>
        </MoviesPageContextProvider>
    )
}
export default MoviesPage
