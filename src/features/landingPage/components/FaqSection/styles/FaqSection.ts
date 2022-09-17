import styled from 'styled-components/macro'

export  const Container=styled.div`
    width:100%;
    height:auto;
    padding:40px 0;
    background:#000;
    display:flex;
    flex-direction:column;
    align-items:center;
`
export  const TextHeader=styled.h1`
    text-align:center;
    font-weight:bold;
    font-size:36px;
    color:#fff;
    margin-bottom:50px;
`
export const Span=styled.span`
    width:auto;
    height:auto;
`
export const Icon=styled.img.attrs((props)=>({
    src:props.src
}))`
    position:absolute;
    right: 30px;
    display:inline-block;
    filter: brightness(0) invert(1);
    width:auto;
    height:auto;
    max-width:23px;
    max-height:30px;
    @media only screen and (max-width:550px){
        height:15px;
        right:15px;
    }
`
export const Overlay=styled.div`
    position:absolute;
    top:0;
    left:0;
    z-index:3;
    width:100%;
    height:100%;
    background:transparent;
`

export const QuestionContainer=styled.div`
    width:60%;
    height:auto;
    display:flex;
    flex-direction:column;
    margin-bottom:6px;
    @media only screen and (max-width:950px){
        width:85%;
    };
    @media only screen and (max-width:550px){
        width:95%;
    }
`

export const QuestionHeader=styled.div`
    position:relative;
    width:100%;
    height:77px;
    overflow:hidden;
    padding:16px 30px;
    font-size:27px;
    color:#fff;
    background:#303030;
    display:flex;
    align-items:center;
    @media only screen and (max-width:950px){
        height:45px;
        font-size:18px;
    };
`
export const QuestionBody=styled.div`
    height:${(props:{showBody:boolean})=>props.showBody ?'auto':'0'};
    width:100%;
    padding:${(props:{showBody:boolean})=>props.showBody ?'30px 20px':'0 20px'};
    margin-top:3px;
    color:#fff;
    overflow:hidden;
    background:#303030;
    transition:all 0.1s ease;
    white-space:pre-wrap;
    user-select: none;
`