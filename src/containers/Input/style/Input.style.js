import styled from 'styled-components/macro'

export const InputContainer= styled.div`
width:100%;
margin-bottom:0.5em;
overflow:hidden;
`
export const FieldWrapper= styled.div`
position:relative;
height:70%;
width:100%;
display:flex;
flex-direction:column;
overflow:hidden;
border-radius:2px;
border:1px solid #8c8c8c;
`
export const InputField=styled.input`
width:100%;
height:100%;
padding:1.6em 1em 1em 1em;
border:none;
`
export const FieldLabel=styled.label`
display:flex;
align-items:center;
box-sizing: border-box;
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
z-index:3;
padding:1em 0 1em 1em;
transition:all 0.1s linear;
font-weight:bold;
color:#9b8c8c;
${({labelClicked})=>labelClicked && `
height:20%;
font-size:0.8rem;
padding-top:0.7em;
border:none;
`}
`
export const Error= styled.div`
width:100%;
height:30%;
color:#b92d2b;
font-size:clamp(0.7rem,1.6vw,0.9rem);
font-weight:480;
`