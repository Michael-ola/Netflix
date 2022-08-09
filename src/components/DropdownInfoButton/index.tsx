import React,{useState} from 'react'
import {StyledButton,StyledIcon,ButtonText} from './style/DropdownInfoButton'
import useMoviesPageData from '../../pages/MoviesPage/hooks/useMoviesPageData'

const dropDownIcon=require('../../assets/images/icons/chevron-right.png');

const DropdownInfoButton =({movieData}:{movieData:any}) => {
    const [hoverState,setHoverState]=useState(false)
    const {movieInfoData}=useMoviesPageData()
/////////
    const mouseEnterHandler = () => {
        setHoverState(true)
    }
    const mouseLeaveHandler = () => {
        setHoverState(false)
    }
    const onClickHandler = () => {
        movieInfoData.setMovieInfoIdList(
            {
                movieID:movieData.id,
                categoryID:movieData.categoryId
            }
        )
    }

    return (
        <StyledButton onClick={onClickHandler} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <StyledIcon src={dropDownIcon}/>
            {hoverState && <ButtonText>More info!</ButtonText>}
        </StyledButton>
    )
}

export default DropdownInfoButton
