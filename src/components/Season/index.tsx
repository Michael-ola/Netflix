import React from 'react'
import {StyledSeason} from './style/Season.style'

const Season = (props) => {
    return (
        <StyledSeason>
            {props.children}
        </StyledSeason>
    )
}

export default Season
