import React from 'react'
import { Hit } from 'react-instantsearch-core'
import {Container} from './styles/index.style'

const ResultsPage = ({hits}:{hits:Hit<BaseHit>[]}) => {
  return (
    <Container>{`${hits}`}</Container>)
}


export default ResultsPage