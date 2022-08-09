import {useContext} from 'react'
import {CategoriesDataContext} from '../context/MoviesCategoriesContext'


const useCategoriesData = () => {
 const data=useContext(CategoriesDataContext)
    if(data===null || data===undefined){
        throw new Error('context not available in this element')
    }
    return data
}

export default useCategoriesData
