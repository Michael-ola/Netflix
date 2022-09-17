import styled from 'styled-components/macro'
import  {Link} from 'react-router-dom'

export const  Container=styled.div`
display:flex;
align-items:center;
width:100%;
border-bottom:1px solid #e6e6e6;
padding:clamp(0.6em,1.6vw,1.3em) 3%;
`

export const Logo=styled.img`
display:block;
width:166px;
height:45px;
filter:invert(16%) sepia(93%) saturate(6440%) hue-rotate(352deg) brightness(88%) contrast(104%);
@media only screen and (max-width:500px){
    width:74px;
    height:20px;
}
`

export const NavLink=styled(Link)`
color:#000;
margin-left:auto;
text-decoration:none;
font-weight:900;
font-size:clamp(0.9rem,2.8vw,1.2rem);
&:hover {
    text-decoration: underline;
}
`
export const SignOutButton=styled.button`
color:#000;
margin-left:auto;
background:inherit;
border:none;
font-weight:900;
font-size:clamp(0.9rem,2.8vw,1.2rem);
&:hover {
    text-decoration: underline;
}
`