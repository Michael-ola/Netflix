import styled from 'styled-components/macro'

export const Container = styled.div`
width: 100%;
min-height: 100vh;
background:#141414;
padding:5% 1% 10px 1%;
`

export const InnerContainer=styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
height: 100%;
color:#fff;
margin:0 auto;

& .movie-poster{
    padding:5%;
}
`