import styled from 'styled-components/macro'

export const MoreInfoButton= styled.button`
display:flex;
align-items:center;
padding:0.5em 1em;
color:#fff;
background:rgba(109,109,110,0.7);
border-radius:5px;
font-weight:900;
font-size:clamp(0em,2vw,1.1em);
border:none;
margin:4px 0.3em 4px 0.21em;
box-sizing:border-box;
&:hover {
    background:rgba(109,109,110,0.4);
    // outline:0.15em solid #fff;
    // outline-offset:0.15em;
}
`

export const InfoIcon= styled.img`
width:1.2em;
height:1.2em;
margin-right:0.6em;
filter:brightness(0) invert(1);
`
