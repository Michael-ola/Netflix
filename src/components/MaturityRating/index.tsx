import React from 'react'
import {StyledMaturityRating} from './style/MaturityRating.style'

const MaturityRating = ({children}:{children:JSX.Element}) => {
    return (
        <StyledMaturityRating>
            {children}
        </StyledMaturityRating>
    )
}

export default MaturityRating
