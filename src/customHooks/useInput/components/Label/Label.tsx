import React,{useContext} from 'react'
import {StyledLabel} from './styles/Label.js'
import {Span} from '../../styles/useInput'
import {InputContext} from '../../context/InputContext'

const Label=()=>{
  const context=useContext(InputContext)
  return(
    <StyledLabel tabIndex={0} {...{error:context?.errors}} {...{labelClicked:context?.labelClickState}}
      onClick={context?.labelClickedHandler} {...{customStyle:context?.customStyle}}>
        <Span>{context?.placeholder}</Span>
    </StyledLabel>
  )
}

export default Label