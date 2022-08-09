import styled from 'styled-components/macro'

export const Container=styled.div`
display:none;
position:fixed;
padding-top:5%;
z-index:12;
overflow-y:scroll;
width:100vw;
height:100vh;
background:rgba(0,0,0,0.5);
${({showModal})=>showModal &&`
display:block;
`}
`
export const InnerContainer=styled.div`
position:relative;
width:80%;
margin:0 auto;
border-radius:8px;
background:#181818;
`
export const Video=styled.video`
display:block;
object-fit:contain;
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
export const InfoText=styled.h5`
padding-top:1em;
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
height:80vh;
&::before{
    content:'';
    display:block;
    height:100%;
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
padding:0 7%;
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
align-items:center;
gap:2%;
`

export const ThirdSectionInner=styled.div`
width:100%;
display:flex;
flex-direction:column;
margin-top:2em;
padding:0 7%;
`