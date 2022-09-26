import styled from 'styled-components/macro'

export const MoviePoster=styled.img`
width:100%;
height:100%;
display:block;
box-sizing:border-box;
padding:0 .125rem;
background:transparent;
border-radius:4px;
background-size:cover;
background-repeat:no-repeat;
`
export const MovieContainer=styled.div`
--width:20%;
display:flex;
position:relative;
justify-content:center;
flex: 0 0 var(--width);
max-width: var(--width);
aspect-ratio:16 / 9;
box-sizing:border-box;
overflow:visible;

@media only screen and (max-width:1100px){
    --width:25%;
}

@media only screen and (max-width:800px){
    --width:33.3333%;
}

@media only screen and (max-width:500px){
    --width:50%;
}
`
export const MovieDetailContainer=styled.div`
display:flex;
flex-direction:column;
width:150%;
margin:auto;
border-radius:8px;
overflow:visible;
color:#fff;
aspect-ratio:6/6;
position:absolute;
top:-50%;
z-index:10;
transform-origin:inherit;
transition:all 0.2s 0.8s linear;
box-shadow:rgba(0,0,0,0.75) 0px 3px 10px;
${({hoverState,showMoreInfoState})=>hoverState ?`
transform:scale(1);
visibility:visible;
`:!showMoreInfoState &&`
visibility:hidden;
transform:scale(0.6);
transition:all 0.2s linear;
`}
`
export const MovieDetailVideo=styled.video`
position:relative;
display:block;
background-size: cover;
background-repeat: no-repeat;
width:100%;
height:60%;
object-fit:cover;
border-top-left-radius:8px;
border-top-right-radius:8px;
background-color:transparent;
background-image:${({image})=>image && `url(${require('assets/images/netflix/smallImages/'+image)})`};
&::before{
    display:block;
    content:'';
    position:absolute;
    top:0;
    width:100%;
    height:100%;
    background:linear-gradient(45deg,rgba(0,0,0,0.6), rgba(0,0,0,0.4) 15%,transparent 40%);
}
`
export const MovieMetaContainer=styled.div`
width:100%;
flex-grow:1;
border-bottom-left-radius:8px;
border-bottom-right-radius:8px;
background:#181818;
overflow:visible;
`
export const ActionBarContainer=styled.div`
display:flex;
width:100%;
gap:4%;
padding:1.3em 1.4em 1.1em 1.4em;
overflow:visible;
`
export const RatingsContainer=styled.div`
display:flex;
align-items:center;
gap:5%;
padding:0.3em 1.4em;
`