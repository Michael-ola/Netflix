import styled from 'styled-components/macro'

export const Container= styled.div`
    width:100%;
    height:auto;
    overflow:hidden;
    border-top: 8px solid #222;
    margin-top:80px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 50px 0 12px 0;
`

export const Ul=styled.ul`
    display:flex;
    width:70%;
    flex-wrap:wrap;
    padding: 20px  0;
    @media only screen and (max-width:700px){
        width:90%;
    }
`
export const Li=styled.li`
    width:25%;
    list-style:none;
    color:#757575;
    margin:8px 0;
    font-size:13px;
    @media only screen and (max-width:950px){
        width:33%;
    };
    @media only screen and (max-width:500px){
        width:50%;
    }
`

export const AnchorTag=styled.a`
    color:#757575;
    text-decoration:none;
    &:hover{
        text-decoration:underline;
    }
`
export  const Paragraph=styled.p`
    width:70%;
    color:#757575;
    font-size:14px;
    @media only screen and (max-width:700px){
        width:90%;
    }
`