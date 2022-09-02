import styled from 'styled-components/macro'

export const Container=styled.div`
width:100%;
height:100vh;
position:fixed;
z-index:10;
background:rgba(255, 255, 255, 0.97);
`

export const CloseButton=styled.button`
width:29px;
aspect-ratio:1/1;
position:absolute;
top:12px;
right:18px;
border:none;
background:inherit;
`
export const CloseIcon=styled.img`
display:block;
width:100%;
height:100%;
`

export const Text=styled.p`
margin:5% auto 0 auto;
max-width:29ch;
text-align:center;
font-weight:bold;
color:#333;
`
