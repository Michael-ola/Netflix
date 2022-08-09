import styled from 'styled-components/macro'

export const CarouselSliderContainer=styled.div`
position:relative;
margin-top:0.5%;
overflow:visible;
z-index:3;
`

export const CarouselSliderInnerContainer=styled.div`
display:flex;
align-items:center;
overflow:visible;
box-sizing: border-box;
width:90%;
margin-left:5%;
transition:transform 0.7s ease-in-out;
transform:translateX(${({sliderIndex})=>sliderIndex?sliderIndex*-100:0}%);
`
export const CarouselRightControl=styled.button`
--font:clamp(0.8em,2vw,1.7em);
--moviePadding:0.125rem;
display:flex;
color:#fff;
border:none;
outline:none;
align-items:center;
justify-content:center;
height:calc(100% + var(--moviePadding));
width:calc(5% + var(--moviePadding));
font-size:0;
font-weight:400;
position:absolute;
z-index:3;
right:0;
top:0;
background:hsla(0,0%,8%,.5);
border-radius:2px 0  0 2px;
${({parentHovered})=>parentHovered &&`
font-size:calc(1.9 * var(--font));
`}
&:hover {
    background:hsla(0,0%,8%,.7);
    font-size:calc(2.8 * var(--font));
}
`
export const CarouselLeftControl=styled(CarouselRightControl)`
display:none;
${({controlClicked})=>controlClicked &&`
display:flex;
`}
border-radius:0 2px 2px 0;
left:0;
top:0;
`

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
overflow:visible;
visibility:hidden;
transform:scale(0.6);
color:#fff;
aspect-ratio:6/6;
position:absolute;
top:-50%;
z-index:10;
transition:all 0.2s 0.8s linear;
box-shadow:rgba(0,0,0,0.75) 0px 3px 10px;
${({hoverState})=>hoverState ?`
transform:scale(1);
visibility:visible;
`:`
transition:all 0.2s linear;
`}
`
export const MovieDetailImage=styled.img`
position:relative;
display:block;
background-size: cover;
background-repeat: no-repeat;
width:100%;
height:60%;
border-top-left-radius:8px;
border-top-right-radius:8px;
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
height:40%;
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