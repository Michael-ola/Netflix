import styled from 'styled-components/macro'
import Play from '../../../components/PlayButton'

export const Container=styled.div`
max-width:100%;
width:180vw;
height:100vh;
transform:scale(0.4);
${({mount})=>mount?`
transform:scale(1);
transition:transform 0.7s ease;
`:`
transform:scale(0.6);
transition:transform 0.3s linear;
`}
${({transformOrigin})=>transformOrigin && `
transform-origin: ${transformOrigin};
`}
`
export const InnerContainer=styled.div`
position:relative;
width:60%;
min-height:100vh;
margin:0 auto;
border-radius:8px;
background:#181818;
padding-bottom:5%;
margin-top:2%;
@media only screen and (max-width:900px){
    width:100%;
    margin-top:0;
}
`
export const VideoControlsContainer=styled.div`
display:flex;
align-items:center;
gap:0.4em;
width:100%;
position:absolute;
bottom:10%;
padding-left:5%;
padding-right:5%;
z-index:4;
button:last-child{
    margin-left:auto;
}
`
export const PlayButton=styled(Play)`
&:hover {
    outline:none;
}
`

export const Video=styled.video`
display:block;
background-repeat:no-repeat;
background-size:cover;
background-color:blue;
background-image:${({image})=>`url(${require('assets/images/netflix/smallImages/'+image)})`};
border-top-left-radius:8px;
border-top-right-radius:8px;
width:100%;
height:100%;
`
export const CloseButton=styled.button`
position:absolute;
z-index:5;
top:1em;
right:1em;
border:none;
border-radius:50%;
background:#181818;
`
export const CloseIcon=styled.img`
width:19px;
height:19px;
margin:0.8em;
display:block;
filter:brightness(0) invert(1);
`
export const TitleText=styled.h2`
font-weight:900;
color:#fff;
`
export const InfoText=styled.div`
padding-top:1em;
font-size:0.9em;
color:#fff;
`
export const InfoTextTitle=styled(InfoText)`
display:inline-block;
font-weight:normal;
font-size:0.8rem;
color:#777;
line-height:0.9;
overflow:hidden;
`
export const VideoSectionContainer=styled.div`
position:relative;
width:100%;
min-height:60%;
&::before{
    content:'';
    display:block;
    height:102%;
    width:100%;
    position:absolute;
    top:0;
    left:0;
    z-index:3;
    background:linear-gradient(0deg,#181818,transparent 50%);
}
`

export const FirstSectionContainer=styled.section`
width:100%;
display:flex;
padding:4% 5% 0 5%;
`

export const FirstSectionInner1=styled.div`
display:flex;
flex-direction:column;
width:60%;
`
export const FirstSectionInner2=styled(FirstSectionInner1)`
width:40%;
`

export const MovieFiguresContainer=styled.div`
width:100%;
display:flex;
flex-wrap: wrap;
align-items:center;
gap:2%;
`

export const ThirdSectionInner=styled.div`
width:100%;
display:flex;
flex-direction:column;
margin-top:4em;
padding:0 7%;
`