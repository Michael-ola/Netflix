import styled from 'styled-components/macro'

export const AnchorTag=styled.a`
color:#757575;
text-decoration:none;
&:hover{
    text-decoration:underline;
}
`

export const FooterTitle=styled.p`
width:70%;
color:#757575;
font-size:14px;
@media only screen and (max-width:700px){
    width:90%;
}
`
export const CountryText= styled(FooterTitle)`
`