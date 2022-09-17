import React from 'react'
import {StyledSeason} from './style/Season.style'

const Season = ({children}:{children:JSX.Element}) => {
    return (
        <StyledSeason>
            {children}
        </StyledSeason>
    )
}

export default Season
