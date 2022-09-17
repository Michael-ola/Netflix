import styled from 'styled-components/macro'
import  Footer from 'Layout/Footer/Footer'
import Navbar from 'features/signUp/Layout/Navbar'

export const Container=styled.div`
position:relative;
width:100%;
height:100vh;
display:flex;
flex-direction:column;
background:url('assets/images/films/children/up/large.jpg');
background-repeat:no-repeat;
background-size:cover;
background-position:center;
&::before{
    content:'';
    position:absolute;
    top:0;
    left:0;
    display:block;
    height:100%;
    width:100%;
    background:rgba(0,0,0,0.3);
    @media only screen and (max-width:530px){
        background:transparent;
    }
}

@media only screen and (max-width:530px){
    background:#fff;
}
`
export const StyledNavbar=styled(Navbar)`
border:none;
& a,button{
    z-index:8;
    color:#fff;
    @media only screen and (max-width:530px){
        color:#000;
    }
}
`
export const StyledFooter=styled(Footer)`
margin-top:auto;
border:none;
background:transparent;
z-index:3;
`

export const AffirmSignOutModal=styled.div`
position:absolute;
display:flex;
flex-direction:column;
justify-content:center;
margin:auto;
inset:0;
height:350px;
width:495px;
padding:2% 5%;
background:lightblue;
@media only screen and (max-width:530px){
    width:100%;
    position:relative;
    inset:auto;
    background:transparent;
}
`
export const Button=styled.button`
padding:0.7em 1em;
border-radius:5px;
width:100%;
border:none;
font-size:1.1rem;
&:hover {
    transform:scale(0.8);
    transition:transform 0.2s ease;
}
@media only screen and (max-width:530px){
    background:#017EFA;
    color:#fff;
}
`
export const ButtonContainer=styled.div`
width:100%;
margin-top:1.4em;
display:flex;
align-items:center;
justify-content:center;
gap:4%;
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