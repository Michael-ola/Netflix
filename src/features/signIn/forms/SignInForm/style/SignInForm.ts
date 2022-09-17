import styled from 'styled-components/macro'
import {Link} from  'react-router-dom'

export const Container= styled.div`
 position:relative;
 z-index:3;
 display:flex;
 flex-direction:column;
 padding:5% 5% 10% 5%;
 margin:7% auto 0 auto;
 width:500px;
 height:auto;
 background:rgba(0,0,0,0.7);
 @media only screen and (max-width:1025px){
    min-height:60vh;
 };
 @media only screen and (max-width:740px){
    width:100%;
    margin-top:2%;
    border-bottom:1px solid rgba(255,255,255,0.8);
 };
`

export const Title = styled.div`
    height:10%;
    width:100%;
    color:#fff;
    font-size:40px;
    font-weight:bold;
    margin-bottom:10px;
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
 margin-top: 45px;
 border-radius:4px;
 background:#e50914;
 color:#fff;
 font-size:21px;
 font-weight:bold;
 border:none;
 outline:none;
`

export  const CheckBoxContainer = styled.div`
 width:auto;
 height:auto;
 display:flex;
 align-items:center;
 align-self:flex-start;
 margin:20px 0;
 user-select: none;
`
export const  CheckBox=styled.input`
    accent-color:#737373;
    width:18px;
    height:18px;
    margin-right:5px;
`

export const CheckboxAndHelpContainer=styled.div`
position:relative;
overflow:hidden;
display:flex;
align-items: center;
width:100%;
height:auto;
display:flex;
font-size:16px;
color:#b3b3b3;
`

export const Help= styled.a`
 position:absolute;
 right:0;
 text-decoration:none;
 &:hover{
    text-decoration:underline;
 }
`

export const SignUpLink= styled(Link)`
color:#fff;
text-decoration:none;
font-size:16px;
&:hover{
   text-decoration:underline;
}
`
export const LearnMoreLink= styled(SignUpLink)`
color:blue;
font-size:14px;
`
export const MetaTextContainer= styled.div`
width:100%;
margin-top:50px;
display:flex;
flex-direction:column;
justify-content:space-around;
min-height:100px;
color:#737373;
`