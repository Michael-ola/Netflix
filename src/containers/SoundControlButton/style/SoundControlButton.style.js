import styled from 'styled-components/macro'

export const StyledButton=styled.button`
display:flex;
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

export const StyledIcon =styled.img`
box-sizing: border-box;
display:block;
width:50%;
height:50%;
filter:brightness(0) invert(1);
`