import React,{useState,useEffect,useRef,useCallback} from 'react'
import {SearchComponentContainer,SearchIcon,
            SearchContainer,SearchInput
        } from './styles/Search.js'

import {createPortal} from 'react-dom'
import {InstantSearch,useHits,useSearchBox} from 'react-instantsearch-hooks-web'
import algoliasearch from 'algoliasearch/lite'
import ResultsPage from '../ResultsDisplayPage/Page'
import useMoviesPageData from 'features/moviesPage/hooks/useMoviesPageData'
import { MoviesCollectionType } from 'types/moviesDataType.js'

interface searchWidgetType{
    clickState:boolean,
    setClickState:React.Dispatch<React.SetStateAction<boolean>>,
}

interface SearchType{
    currentRefinement?:string,
    isSearchStalled?:boolean,
    refine?:Function
}


const searchClient=algoliasearch(
    'G1WAUE41I5',
    '4d0148459c06e52c23e7f7d1f0e18777'
)


const SearchComponent = () => {
    const [clickState,setClickState]=useState(false)
     
    const onClickHandler = ()=>{
        setClickState(true)
    }
    
    return(
            <SearchComponentContainer {...{clickState}}>
                <SearchIcon onClick={onClickHandler} {...{clickState}}/>
                <InstantSearch  searchClient={searchClient} indexName="netflix-clone-movies">
                    <Search clickState={clickState} setClickState={setClickState}/>
                </InstantSearch>
            </SearchComponentContainer>
    )
}

const Search = ({clickState,setClickState}:searchWidgetType) => {
    const {currentRefinement,isSearchStalled,refine}:SearchType=useSearchBox();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [blurState,setBlurState] =useState(false)
    const [inputValue,setInputValue] = useState('');
    const {hits}=useHits();
    const moviesPageData=useMoviesPageData();

    if(isSearchStalled){
        console.log('stalled')
    }
    
    useEffect(() => {
        if(clickState){
            inputRef?.current?.focus();
        }
    },[clickState])

    const focusHandler= useCallback((node: HTMLInputElement | null)=>{
        inputRef.current=node;
    },[])

    const onBlurHandler=() =>{
        setClickState(false)
        setBlurState(true)
    }
    const onChangeHandler=(event:React.ChangeEvent<HTMLInputElement>) =>{
        setInputValue(event.target.value);
        refine(event.target.value);
        event.target.value ? moviesPageData.setIsSearchText(true): moviesPageData.setIsSearchText(false);
    }
    return(
        <>
        <SearchContainer {...{clickState,blurState}}>
            <SearchIcon style={{position: 'relative'}}/>
            <SearchInput type="search" value={currentRefinement} ref={focusHandler} placeholder='Titles, people, genres' 
             onBlur={onBlurHandler} onClick={(event:React.MouseEvent)=>{event.stopPropagation()}}
             onChange={onChangeHandler}/>
        </SearchContainer>
        {inputValue && createPortal(<ResultsPage value={inputValue} hits={hits as unknown as MoviesCollectionType[]}/>,document.getElementById('searchDisplay') as Element)}
        </>
    )
}

export default SearchComponent;