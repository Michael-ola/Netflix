import styled from 'styled-components/macro'

export const Container = styled.div`
display:flex;
flex-direction:column;
width:100%;
margin:1.5em 0 16% 0;
padding:0 17%;
@media only screen and (max-width:600px){
    padding:0 3%;
}
& button{
    max-width:400px;
}

transform:translateX(100vw);
opacity:0;
${({mount,unmount})=>{
    return unmount ? `
        opacity:1;
        animation:unmountAnimation 0.4s ease-in-out forwards;
    `: mount &&`animation:mountAnimation 0.4s ease-in-out forwards;`
}}


@keyframes mountAnimation{
    from{
        opacity:0;
        transform:translateX(100vw);
    }
    to{
        opacity:1;
        transform:translateX(0);
    }
}

@keyframes unmountAnimation{
    from{
        transform:translateX(0);
    }
    to{
        opacity:0;
        transform:translateX(-30%);
    }
}
`

export const CardsContainer=styled.ul`
display:flex;
flex-direction:column;
align-items:flex-start;
margin-top:1em;
& li span{
    max-width:100%;
}
& li {
    margin-bottom:0.5em; 
}
`

export const PlanButtonsContainer= styled.div`
width:100%;
height:100%;
z-index:3;
display:flex;
justify-content:flex-end;
position:sticky;
top:0;
background:#fff; 
padding-top:0;
user-select: none;
& div{
    width:60%;
    display:flex;
    gap:3px;
    @media only screen and (max-width:600px){
        width:100%;
    }
}
`
export const PlanButton=styled.div`
position:relative;
min-width:25%;
flex-grow:1;
transform:scale(0.8);
padding:0.2em;
aspect-ratio:1/1.1;
color:#fff;
display:flex;
align-items:center;
justify-content:center;
border-radius:3px;
text-transform:capitalize;
font-weight:bold;
font-size:1.2rem;
background:#ef6b72;
${({selected})=>selected && `
background:#e50914;
`}

&::after {
    --size:14px;
    content:'';
    position:absolute;
    display:none;
    ${({selected})=>selected && `
        display:block;
    `}
    align-self:center;
    width:0px;
    height:0px;
    border:var(--size) solid transparent;
    border-top:var(--size) solid #e50914;
    bottom:calc(0px - 1.8 * var(--size));
}

@media only screen and (max-width:1033px){
    font-size:0.9rem;
}
@media only screen and (max-width:600px){
    font-size:1.2rem;
}
`
export const PropertiesWrapper=styled.div`
width:100%;
display:flex;
flex-direction:column;
`

export const PropertiesContainer=styled.div`
width:100%;
display:flex;
border-bottom:1px solid #cccccc;
&:last-of-type{
    border:none;
}
@media only screen and (max-width:600px){
    flex-direction:column;
    padding:0.8em 0;
}
`

export const PropertyName=styled.p`
width:40%;
padding:1.5em 0 1.5em 1em;
color:#333;
fill:#333;
user-select: none;
font-weight:500;
&:first-letter{
    text-transform:uppercase;
}
@media only screen and (max-width:600px){
    width:100%;
    text-align:center;
    font-size:0.8rem;
    margin-bottom:0.8em;
    padding:0;
    font-weight:normal;
}
`

export const PropertyItemsContainer=styled.div`
text-align: center;
width:60%;
display:flex;
color:#737373;
font-weight:700;
justify-content:center;
align-self:center;
@media only screen and (max-width:600px){
    width:100%;
    font-size:0.8em;
}
`
export const PropertyItem=styled.p`
width:25%;
padding:1.5em 0 1.5em 0;
user-select: none;
&:first-letter{
    text-transform:uppercase;
}

${({selected})=>selected && `
color:#e50914;
`}

@media only screen and (max-width:600px){
    padding:0;
}
`
export const DeviceItemsContainer=styled.div`
width:25%;
${({selected})=>selected && `
color:#e50914;
`}
`
export const DeviceItem=styled.div`
width:100%;
user-select: none;
padding-top:1em;
display:flex;
flex-direction:column;
align-items:center;
text-transform:capitalize;
font-size:0.8rem;
`
export const DeviceImage=styled.img`
display:block;
width:27px;
height:24px;
filter:invert(44%) sepia(10%) saturate(9%) hue-rotate(353deg) brightness(100%) contrast(89%);
${({selected})=>selected && `
filter:invert(16%) sepia(93%) saturate(6440%) hue-rotate(352deg) brightness(88%) contrast(104%);
`}
`

export  const TermsText=styled.p`
font-size:0.8rem;
color:#737373;
max-width:108ch;
margin-top:2em;
& a{
text-decoration:none;
  &:hover {
      text-decoration:underline;
  }
}
`