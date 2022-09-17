import React from 'react'
import {StyledMatchScore} from './style/MatchScore.style'


const MatchScore = ({children}:{children:JSX.Element}) => {
    return (
        <StyledMatchScore>
            {children}
        </StyledMatchScore>
    )
}

export default MatchScore
