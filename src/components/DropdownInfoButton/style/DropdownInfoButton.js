import styled from 'styled-components/macro'

export const StyledButton = styled.button`
display:flex;
margin-left:auto;
justify-content:center;
align-items:center;
position:relative;
z-index:2;
overflow:visible;
flex-shrink:0;
width:1cm; 
height:1cm;
border:1px solid rgba(255,255,255,0.7);
border-radius:50%;
background:transparent;
&:hover {
    background:rgba(255,255,255,0.2);
    border-color:#fff;
}
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
width:14px;
height:14px;
display:block;
filter:brightness(0) invert(1);
transform:rotate(90deg);
`