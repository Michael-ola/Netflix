import React from 'react'
import {StyledMaturityRating} from './style/MaturityRating.style'

const MaturityRating = (props) => {
    return (
        <StyledMaturityRating>
            {props.children}
        </StyledMaturityRating>
    )
}

export default MaturityRating
