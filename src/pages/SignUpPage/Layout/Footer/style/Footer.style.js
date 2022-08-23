import styled from 'styled-components/macro'
import Footer from '../../../../../components/Footer/Footer'

export const StyledFooter=styled(Footer)`
background:#f3f3f3;
border-top: 1px solid #e6e6e6;
position:relative;
bottom:0;
`

export const  StyledLink=styled.a`
color:#737373;
text-decoration:none;
margin-left:15%;
align-self:flex-start;
&:hover {
    text-decoration: underline;
}
@media only screen and (max-width:700px){
    margin-left:5%;
}
`