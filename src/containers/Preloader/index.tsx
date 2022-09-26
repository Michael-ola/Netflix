import React from 'react'
import {Container,Image} from './styles/Preloader.style'

const spinner=require('assets/images/misc/spinner.png');

const Preloader = () => {
  return (
    <Container>
        <Image src={spinner}/>
    </Container>
  )
}

export default Preloader