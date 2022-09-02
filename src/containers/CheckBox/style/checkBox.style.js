import styled from 'styled-components/macro'

export const CheckBoxContainer=styled.div`
display:flex;
width:100%;
align-items:center;
margin-top:1em;
gap:6px;
color:inherit;
font-size:1rem;
& input{
    width:20px;
    height:20px;
    background:#fff;
}
`
export const Error= styled.div`
width:100%;
height:30%;
color:#b92d2b;
font-size:clamp(0.7rem,1.6vw,0.9rem);
font-weight:480;
`