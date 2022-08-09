import styled from 'styled-components/macro'

export const Container = styled.div`
position:relative;
height:clamp(20vh,50vw,105vh);
overflow:visible;
&::before{
    content:'';
    display:block;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:linear-gradient(77deg,rgba(0,0,0,.6),transparent 85%);
}
`

export const MovieVideo=styled.video`
width:100%;
height:100%;
object-fit:cover;
`
export const MoviePoster=styled.img`
width:100%;
height:100%;
background-repeat:no-repeat;
background-size:cover;
background-position:center;
display:block;
`
export const MovieDataContainer= styled.div`
position:absolute;
margin:auto;
left:clamp(1px,5vw,70px);
top:0;
bottom:0;
display:flex;
flex-direction:column;
justify-content:center;
background:transparent;
`

export const MovieTitle=styled.img`
width:clamp(60px,25vw,330px);
height:clamp(40px,15vw,180px);
background-repeat:no-repeat;
background-size:cover;
background-position:center;
display:block;
margin-bottom:5%;
`

export const Controls= styled.div`
display:flex;
align-items:center;
margin:clamp(3px,2vw,20px) 0;
`

export const MovieDescription=styled.p`
color:#fff;
font-size:clamp(0em,2vw,16px);
font-weight:900;
max-width:51ch;
text-align:justify;
`
export const AgeRating= styled.div`
position:absolute;
bottom:30%;
right:0;
padding:0.2em 2.5em 0.2em 1em;
color:#fff;
background:rgba(51,51,51,.6);
font-size:clamp(0.3em,1.5vw,1.1em);
&::before{
    content:'';
    display:block;
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:0.2em;
    background:#DCDCDC;
}
`