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


  const findItem=(item:string[])=>{
    return item.join().replaceAll(',','').includes(value)
  }
  
  const sortCompare=(a:MovieType,b:MovieType)=>{
    if(a.name.includes(value) || findItem(a.descriptions['more-info'].genres) || findItem(a.descriptions['more-info'].cast) || findItem(a.descriptions['more-info'].director) || findItem(a.descriptions['more-info'].writer)){
      return -1
    }
    if(b.name.includes(value) || findItem(b.descriptions['more-info'].genres) || findItem(b.descriptions['more-info'].cast) || findItem(b.descriptions['more-info'].director) || findItem(b.descriptions['more-info'].writer)){
      return 1
    }
    return 0
  }

  return (
    <Container>
      <div style={{color:'#fff',fontSize:'1.7rem',marginLeft:'0.5em'}}>Search Results:</div>
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