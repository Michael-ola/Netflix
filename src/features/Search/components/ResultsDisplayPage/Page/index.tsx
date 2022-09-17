import React from 'react'
import {Container} from './styles/index.style'


import {InstantSearch,Hits,SearchBox} from 'react-instantsearch-hooks-web'
import algoliasearch from 'algoliasearch/lite'

const searchClient=algoliasearch(
    'G1WAUE41I5',
    '4d0148459c06e52c23e7f7d1f0e18777'
)

const ResultsPage = () => {
  return (
    <Container>
        <InstantSearch searchClient={searchClient} indexName={"netflix-clone-movies"}>
        <SearchBox/>
        <Hits hitComponent={ResultsPage}/>
        </InstantSearch>
    </Container>
  )
}
export default ResultsPage