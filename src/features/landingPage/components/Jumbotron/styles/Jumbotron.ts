import styled from 'styled-components/macro'

export const Container= styled.div`
    position:relative;
    width:100%;
    //min-width:337px;
    padding:10% 5% 10% 12%;
    height:auto;
    margin:0 auto;
    background:#000;
    display:flex;
    justify-content:space-between;
    flex-direction:${(props:{flexDirection:string,children:JSX.Element[]})=>props.flexDirection};
    color:#fff;
    border-bottom:8px solid #222;
    @media only screen and (max-width:950px){
        flex-direction:column;
        align-items:center;
        justify-content:flex-start;
    };
`

export const Title= styled.h1`
 width:100%; 
 display:inline-block;
 font-weight:bold;
 text-align:left;
 font-size:3.125rem;
 margin-bottom:3%;
 @media only screen and (max-width:950px){
    text-align:center;
    font-size:2.425rem;
};
@media only screen and (max-width:750px){
    font-size:2em;
};
@media only screen and (max-width:500px){
    font-size:1.7rem;
}
`

export const Subtitle= styled.h2`
 width:100%; 
 display:inline-block;
 font-weight:400;
 text-align:left;
 font-size:1.625rem;
 @media only screen and (max-width:950px){
    text-align:center;
    font-size:1.2rem;
    font-weight:bold;
};
@media only screen and (max-width:750px){
    font-size:1em;
};
@media only screen and (max-width:500px){
    font-size:1em;
}
`

export const Image= styled.img.attrs((props)=>({
    src:props.src,
    alt:props.alt
}))`
    height:auto;
    width:auto;
    position: relative;
    margin:0 auto;
    max-width:70%;
`
enum Direction{ROW='row',ROW_REVERSE='row-reverse'};
export const TextContainer= styled.div`
    width:45%;
    height:auto;
    margin-right:${(props:{image:string,flexDirection:string,children:JSX.Element[]})=>
    props.flexDirection===Direction.ROW &&'5%'};
    margin-left:${(props:{image:string,flexDirection:string,children:JSX.Element[]})=>
    props.flexDirection===Direction.ROW_REVERSE &&'5%'};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    @media only screen and (max-width:950px){
        width:100%;
        height:${(props:{image:string,flexDirection:string,children:JSX.Element[]})=>props.image?'30%':'100%'};
    };
    @media only screen and (max-width:790px){
        height:${(props:{image:string,flexDirection:string,children:JSX.Element[]})=>props.image?'50%':'100%'};
     };
    @media only screen and (max-width:500px){
        height:${(props:{image:string,flexDirection:string,children:JSX.Element[]})=>props.image?'45%':'100%'};
     }
`

export const AnimatedImageContainer= styled.div`
position:relative;
display:flex;
justify-content:center;
`
export const FirstVideo= styled.video`
position:absolute;
left:0;
bottom:25%;
width:100%;
height:54%;
z-index:2;
`
export const SecondImageComponent= styled.div`
position:absolute;
bottom:7%;
z-index:2;
width:120%;
height:20%;
display: flex;
align-items: center;
gap:5%;
background:#000;
border:2px solid #404040;
border-radius:11px;
padding:2% 5%;
& img {
    height:100%;
    width:16%;
}

& div:first-of-type{
    display: flex;
    flex-direction:column;
    & span:first-of-type {
        font-weight:bold;
        font-size: 1.2rem;
    }
    & span:last-of-type{
        color:#0071eb;
        font-size: 0.9rem;
    }
}

& div:last-of-type{
    width:48px;
    height:48px;
    margin-left:auto;
    background-repeat:no-repeat !important;
    background-size:cover !important;
}
`