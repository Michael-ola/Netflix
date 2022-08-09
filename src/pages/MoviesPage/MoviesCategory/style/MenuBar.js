import styled from 'styled-components/macro'

export const MenuBarContainer=styled.div`
display:flex;
margin-left:5%;
@media only screen and (max-width:500px){
    flex-direction:column;
}
`
export const ProgressBarContainer=styled.div`
align-self:center;
margin-left:auto;
z-index:3;
display:flex;
visibility:hidden;
justify-content:flex-end;
margin-right:4%;
${({showProgressBar})=>showProgressBar &&`
visibility:visible;
`}

@media only screen and (max-width:500px){
    order:1;
}
`

export const ProgressItem=styled.span`
width:12px;
height:2px;
margin-left:2px;
background:grey;
`



export const Category=styled.div`
align-self:center;
display:flex;
width:100%;
align-items:center;
@media only screen and (max-width:500px){
    align-self:flex-start;
    order:2;
}
`

export const Title=styled.div`
    vertical-align: bottom;
    color: #e5e5e5;
    display: inline-block;
    font-size:clamp(0.7rem.1.6vw,1rem);
    font-weight: 700;
    margin-right:6px;
`
export const SlideItem=styled.div`
align-self: flex-end;
display:flex;
flex: 2;
position:relative;
align-items:center;
overflow:visible;
margin-bottom:2px;
`

export const SlideText = styled.span`
display:flex;
align-items:center;
font-size:0.6rem;
font-weight:900;
color:#54b9c5;
opacity:0;
${({slideItem})=>slideItem? `
animation:slideLTR 1s linear forwards;
`:`animation:slideRTL 1s linear forwards;`}

@keyframes slideLTR{
    0%{
        opacity:0;
        transform:translateX(0%);
    }
    70%{
        opacity:1;
    }
    100%{
        opacity:1;
        transform:translateX(15%);
    }
}

@keyframes slideRTL{
    0%{
        opacity:1;
        transform:translateX(15%);
    }
    80%{
        opacity:0;
    }
    100%{
        opacity:0;
        transform:translateX(0%);
    }
}

`

export const SlideArrow=styled.span`
--transition-delay:0s;
position:absolute;
display:flex;
align-items:center;
overflow:hidden;
margin-bottom:0.2em;
width:27px;
font-size:clamp(0.9em,1.6vw,1.3em);
font-weight:900;
max-height:100%;
z-index:3;
transition:transform 0.2s var(--transition-delay) linear;
visibility:hidden;
color:#54b9c5;
${({showSlideArrow})=>showSlideArrow &&`
visibility:visible;
`}

${({slideItem})=>slideItem ?`
    transform:translateX(220%);
`:`--transition-delay:0.7s;`}

`