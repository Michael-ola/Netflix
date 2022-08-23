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
border:2px solid grey;
border-radius:50%;
background:transparent;
&:hover {
    background:#363636;
    border-color:#fff;
}
`

export const StyledIcon =styled.img`
box-sizing: border-box;
display:block;
width:40%;
height:40%;
filter:brightness(0) invert(1);
`