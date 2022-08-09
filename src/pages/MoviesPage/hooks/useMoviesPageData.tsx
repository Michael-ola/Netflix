import {useContext} from 'react'
import {MoviesPageContext} from '../context/MoviesPageContext'


const useMoviesPageData = () => {
 const data=useContext(MoviesPageContext)
    if(data===null || data===undefined){
        throw new Error('context not available in this element')
    }
    return data
}

export default useMoviesPageData
