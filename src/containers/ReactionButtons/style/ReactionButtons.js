import styled from 'styled-components/macro'

export const Container = styled.div`
position:relative;
display:flex;
overflow:visible;
justify-content:center;
align-items:center;
`

export const StyledLikeButton=styled.button`
display:flex;
justify-content:center;
align-items:center;
position:relative;
z-index:2;
overflow:visible;
flex-shrink:0;
width:1cm; 
height:1cm;
border-radius:50%;
border-color:transparent;
background:transparent;
&:hover {
    background:#363636;
}
${({placeHolder})=>placeHolder &&`
border:2px solid grey;
`}
`
export const StyledLoveButton=styled(StyledLikeButton)`

`
export const StyledDislikeButton=styled(StyledLikeButton)`

`

export const CombinedReactionsContainer=styled.div`
display:flex;
position:absolute;
transform:scaleX(0.5);
overflow:visible;
gap:0.4em;
padding:0.6em;
opacity:0;
border-radius: 60px;
background:#232323;
transition:transform 0.5s ease,opacity 0.3s linear;
${({show})=>show &&`
z-index:3;
opacity:1;
transform:scaleX(1);
`}
`

export const ButtonText=styled.div`
display:flex;
align-items:center;
justify-content:center;
position:absolute;
overflow:visible;
top:-160%;
background:#fff;
width:7em;height:2.3em;
border-radius:5px;
color:#000;
font-size:0.9rem;
font-weight:bold;
&::after{
    --width:0.55em;
    content:'';
    display:block;
    position:absolute;
    width:0;
    height:0;
    border:var(--width) solid transparent;
    border-top-color:#fff;
    bottom:calc(var(--width) * -2);
}
`
export const StyledIcon =styled.img`
position:absolute;
width:57px;
height:57px;
display:block;
`