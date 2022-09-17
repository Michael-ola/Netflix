import React,{useState,useEffect,useRef,useCallback} from 'react'
import {SearchComponentContainer,SearchIcon,
            SearchContainer,SearchInput
        } from './styles/Search.js'
import {createPortal} from 'react-dom'
import ResultsPage from '../ResultsDisplayPage/Page'

//import {connectSearchBox,SearchBox} from 'react-instantsearch-hooks-web'
import algoliasearch from 'algoliasearch/lite'
import {InstantSearch,Hits} from 'react-instantsearch-dom'

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
        <>p</>
    )
}

interface searchWidgetType{
    clickState:boolean,
    setClickState:React.Dispatch<React.SetStateAction<boolean>>,
    currentRefinement?:any,
    isSearchStalled?:any,
    refine?:any
}

const Search = ({clickState,setClickState,currentRefinement,isSearchStalled,refine}:searchWidgetType) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [blurState,setBlurState] =useState(false)
    const [inputValue,setInputValue] = useState('')
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
        console.log(currentRefinement)
        setInputValue(event.target.value);
        refine(event.target.value)
    }
    return(
        <>
        <SearchContainer {...{clickState,blurState}}>
            <SearchIcon style={{position: 'relative'}}/>
            <SearchInput type="search" value={currentRefinement} ref={focusHandler} placeholder='Titles, people, genres' 
             onBlur={onBlurHandler} onClick={(event:React.MouseEvent)=>{event.stopPropagation()}}
             onChange={onChangeHandler}/>
        </SearchContainer>
        {/*inputValue && createPortal(<ResultsPage Hits={Hits}/>,document.getElementById('searchDisplay') as Element)*/}
        </>
    )
}

//const CustomSearchWidget=connectSearchBox(Search);
export default SearchComponent;