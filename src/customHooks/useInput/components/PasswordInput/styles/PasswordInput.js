import styled from 'styled-components/macro'

export const ShowHideButton=styled.button`
position:absolute;
opacity:1;
top:0;
right:0;
height:100%;
display:flex;
align-items:center;
justify-content:center;
width:20%;
z-index:6;
color:#9b8c8c;
background:inherit;
border:none;
border-bottom-right-radius:inherit;
border-top-right-radius:inherit;
font-size:clamp(12px,1.6vw,18px);
line-height:1.1;
user-select:none;
${({error})=>error && 'height:95%'};
${({labelClicked})=>labelClicked===false && 'opacity:0'};
`