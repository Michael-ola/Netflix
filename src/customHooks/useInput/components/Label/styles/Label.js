import styled from 'styled-components/macro'


export const StyledLabel=styled.label`
position:absolute;
top:0;
z-index:5;
display:flex;
overflow:hidden;
align-items:${(props)=>props.labelClicked?'flex-end':'center'};
border-radius:inherit;
font-weight:bold;
line-height:1.1;
height:${(props)=>props.error? '93%':'100%'};
width:100%;
font-size:17px;
padding:0 15px;
transition:height 0.1s ease-out;
background:${(props)=>props.labelClicked?'transparent':'inherit'};
color:${(props)=>((props.customStyle && props.customStyle.labelColor) || '#9b8c8c')};
cursor:text;
${(props)=>props.labelClicked &&`
    height:35%;
    font-size:13px;
`};
@media only screen and (max-width:600px){
    height:${(props)=>props.labelClicked?'35%':props.error?'93%':'100%'};
    font-size:${(props)=>props.labelClicked?'10px':'13px'};
}
`