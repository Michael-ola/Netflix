import styled from 'styled-components/macro'

export const Container = styled.div`
margin:7em auto 8em auto;
width:350px;
display:flex;
flex-direction:column;
align-items:center;
@media only screen and (max-width:500px){
    align-items:flex-start;
    margin-right:8%;
    margin-left:8%;
}
`

export const Image = styled.img`
display:block;
width:50px;
height:50px;
margin-bottom:1.5em;
`
export const StepText = styled.p`
font-size:0.8rem;
`
export const CardsContainer= styled.ul`
width:100%;
margin-top:1.5em;
display:flex;
flex-direction:column;
align-items:center;
@media only screen and (max-width:500px){
    align-items:flex-start;
}

`