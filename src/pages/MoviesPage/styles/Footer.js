import styled from 'styled-components/macro'
import FooterStructure from '../../../components/Footer/Footer'

export const Container=styled.div`
display:flex;
flex-direction:column;
color:#fff;
`

export const StyledFooterStructure=styled(FooterStructure)`
border:none;
margin:3% 0 0.5em 5% ;
align-items:flex-start;
`

export const SocialsContainer =styled.div`
display:flex;
gap:2em;
`
export const Icon=styled.img`
display:block;
width:22px;
height:22px;
filter:brightness(0) invert(1);
`

export const AppendContainer =styled.div`
display:flex;
flex-direction:column;
gap:1em;
color:#808080;
`
export const ServiceCode =styled.button`
border:1px solid grey;
margin-right:auto;
padding:0.5em 1em;
background:transparent;
color:inherit;
&:hover {
    color:#fff;
}
`
export const Copyright=styled.p`
font-size:0.8em;
`

export const AnchorTag=styled.a`
    text-decoration:none;
`