import React,{useEffect,useRef} from 'react'
import {Container,InnerContainer} from './styles/index.style'
import Movie from 'features/moviesPage/displayMoviesCategories/components/Movie'
import {MovieType,MoviesCollectionType} from 'types/moviesDataType'
import assignMoviePosition from 'utils/assignMoviePosition'

const ResultsPage = ({hits,value}:{hits:MoviesCollectionType[],value:string}) => {
  const innerContainerRef=useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const carouselChildren=innerContainerRef.current?.children;
    assignMoviePosition(carouselChildren as HTMLCollection)
  },[])


  const sortCompare=(a:MovieType,b:MovieType)=>{
    if(a.name.includes(value)){
      return -1
    }
    if(b.name.includes(value)){
      return 1
    }
    return 0
  }
  return (
    <Container>
      <InnerContainer ref={innerContainerRef}>{
        hits?.map((hit)=>{
          const arr= hit.Movies.sort(sortCompare).map((movieData:MovieType,index:number)=><Movie  key={index} movieData={movieData}/>)
          return arr
        })
      }</InnerContainer>
    </Container>
  )
}


export default ResultsPage