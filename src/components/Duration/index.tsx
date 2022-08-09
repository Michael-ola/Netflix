import React from 'react'
import {StyledDuration} from './style/Duration.style'

const Duration = (props) => {
    return (
        <StyledDuration>
            {props.children}
        </StyledDuration>
    )
}

export default Duration
