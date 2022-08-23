import styled from 'styled-components/macro'

export const Container = styled.div`
width:100%;
display:flex;
justify-content:center;
`
export const InnerContainer = styled.div`
box-sizing: border-box;
width:360px;
margin:8em 3em 4em 3em;
`

export const HeaderImage = styled.img`
display:block;
margin:0 auto;
margin-bottom: 2em;
width:260px;
`
export const TextContainer=styled.div`
width:100%;
color:#333333;
text-align:center;
@media only screen and (max-width:600px){
    text-align:left;
}
`