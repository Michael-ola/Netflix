import React from 'react'
import {StyledDuration} from './style/Duration.style'

const Duration = ({children}:{children:JSX.Element}) => {
    return (
        <StyledDuration>
            {children}
        </StyledDuration>
    )
}

export default Duration
