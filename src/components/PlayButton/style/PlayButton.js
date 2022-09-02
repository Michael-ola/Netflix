import styled from 'styled-components/macro'

export const PlayButtonContainer= styled.button`
display:flex;
justify-content:center;
align-items:center;
padding:0.5em 1em;
background:#fff;
border-radius:5px;
font-weight:900;
font-size:clamp(0em,2vw,1.1em);
border:none;
margin:4px 0.3em 4px 0.21em;
box-sizing:border-box;
&:hover {
    background:rgba(255,255,255,0.7);
    // outline:0.15em solid #fff;
    // outline-offset:0.15em;
}
${({round})=>round &&`
width:1cm;
height:1cm;
border-radius:50%;
padding:0;
margin:0;
&:hover {
    background:#fff;
    outline:none;
    outline-offset:0;
}
`}
`

export const PlayIcon= styled.img`
display:block;
width:1.2em;
height:1.2em;
margin-right:0.6em;
${({round})=>round &&`
margin-right:0;
width:60%;
height:60%;
`}
`