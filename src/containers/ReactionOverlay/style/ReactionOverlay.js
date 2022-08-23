import styled from 'styled-components/macro'

export const Container = styled.div`
display:none;
flex-direction:column;
align-items:center;
justify-content:center;
width:100vw;
height:100vh;
position:fixed;
top:0;
right:0;
z-index:30;
background:linear-gradient(to right,rgba(0,0,0,0.6) 10%,rgba(0,0,0,0.8) 65%,rgba(0,0,0,0.6) 100%);
backdrop-filter:blur(7px);
${({showOverlayState})=>showOverlayState &&`
display:flex;
`}
`

export const CloseButton=styled.button`
display:flex;
align-items:center;
justify-content:center;
background:transparent;
border:none;
position:absolute;
top:8%;
right:6%;
`
export const CloseIcon=styled.img`
filter:brightness(0) invert(1);
width:22px;
height:22px;
`
export const TitleText=styled.p`
text-align: center;
color:#fff;
font-weight:900;
font-size:clamp(0.9rem,9vw,2.6rem);
`
export const Subtext=styled.p`
margin-top:0.5em;
text-align: center;
color:#696a6b;
font-weight:900;
font-size:clamp(0.9rem,5vw,1.2rem);
`

export const ThumbsSemanticsContainer= styled.div`
display:flex;
gap:5%;
justify-content:center;
width:100%;
margin-top:2em;
`

export const ThumbText= styled.p`
color:#fff;
text-align:center;
font-size:clamp(0.3rem,3vw,1rem);
font-weight:900;
max-width:15ch;
`
export const ThumbIcon=styled.img`
--size:clamp(15px,5vw,40px);
display:block;
width:var(--size);
height:var(--size);
`
export const ThumbContainer=styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:18px;
`

export const GotItButton=styled.button`
padding:0.5em 1.3em;
font-weight:900;
margin-top:3em;
color:#fff;
border:2px solid #fff;
border-radius:5px;
background:transparent;
`