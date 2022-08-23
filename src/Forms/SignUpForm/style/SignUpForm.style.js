import styled from 'styled-components/macro'

export const Container= styled.div`
 position:relative;
 z-index:3;
 display:flex;
 flex-direction:column;
 margin:7% auto 0 auto;
 width:100%;
 height:auto;
 background:#fff;
`
export  const StyledForm = styled.form`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
`

export  const SubmitButton = styled.button`
 width:100%;
 height:60px;
 margin-top:1em;
 border-radius:4px;
 background:#e50914;
 color:#fff;
 font-size:21px;
 font-weight:bold;
 border:none;
 outline:none;
 &:hover {
    background:#f6121d;
 }
`

export  const CheckBoxContainer = styled.div`
 width:auto;
 height:auto;
 display:flex;
 align-items:center;
 align-self:flex-start;
 margin:0.3em 0;
 font-weight:450;
 user-select: none;
`
export const  CheckBox=styled.input`
    accent-color:#0071eb;
    width:27px;
    height:27px;
    margin-right:8px;
`

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
border-radius:4px;
border:1px solid grey;
${({isEmail})=>isEmail ?`
border:1px solid #5fa53f;
`:isEmail!==null &&isEmail!==undefined  &&`
border:1px solid #b92d2b;
`}

${({lengthAccepted})=>lengthAccepted ?`
border:1px solid #5fa53f;
`:lengthAccepted!==null &&lengthAccepted!==undefined &&`
border:1px solid #b92d2b;
`}
`
export const InputField=styled.input`
width:100%;
height:100%;
padding:1.6em 1em 1em 1em;
border:none;
`
export const FieldLabel=styled.label`
box-sizing: border-box;
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
z-index:3;
padding:1em 0 0 1em;
transition:all 0.1s linear;
font-weight:bold;
color:#9b8c8c;
${({labelClicked})=>labelClicked && `
height:20%;
font-size:0.8rem;
padding-top:0.3em;
border:none;
`}
`
export const Error= styled.div`
width:100%;
height:30%;
color:red;
font-size:clamp(0.7rem,1.6vw,0.9rem);
`
