import React,{useState,useEffect,useRef,useCallback} from 'react'
import {SearchComponentContainer,SearchIcon,
            SearchContainer,SearchInput
        } from './styles/Search.js'

const SearchComponent = () => {
    const [clickState,setClickState]=useState(false)
     
    const onClickHandler = ()=>{
        setClickState(true)
    }
    
    return(
        <SearchComponentContainer  {...{clickState}}>
            <Search clickState={clickState} setClickState={setClickState}/> 
            <SearchIcon onClick={onClickHandler} style={{right:'7px'}} {...{clickState}}/>
        </SearchComponentContainer>
    )
}

const Search = ({clickState,setClickState}:{clickState:boolean,setClickState:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [blurState,setBlurState] =useState(false)
    useEffect(() => {
        if(clickState){
            inputRef.current.focus();
            console.log(inputRef.current,clickState)
        }
    },[clickState])

    const focusHandler= useCallback((node)=>{
        inputRef.current=node;
    },[])

    const onBlurHandler=() =>{
        setClickState(false)
        setBlurState(true)
    }
    
    return(
        <SearchContainer {...{clickState,blurState}}>
            <SearchIcon style={{position: 'relative'}}/>
            <SearchInput ref={focusHandler} placeholder='Titles, people, genres'  onBlur={onBlurHandler} onClick={(event)=>{event.stopPropagation()}}/>
        </SearchContainer>
    )
}

export default SearchComponent;