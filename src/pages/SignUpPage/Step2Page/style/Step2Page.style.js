import styled from 'styled-components/macro'

export const Container = styled.div`
width:100%;
& button {
    margin-bottom:2em;
}
`

export const InnerContainer = styled.div`
box-sizing: border-box;
width:440px;
margin:2em auto;
@media only screen and (max-width:500px){
    width:100%;
    padding:0 5%;
    
}
`

export const TextContainer=styled.div`
width:100%;
color:#333333;
`