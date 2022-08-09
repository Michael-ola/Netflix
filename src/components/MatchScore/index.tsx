import React from 'react'
import {StyledMatchScore} from './style/MatchScore.style'


const MatchScore = (props) => {
    return (
        <StyledMatchScore>
            {props.children}
        </StyledMatchScore>
    )
}

export default MatchScore
