import styled from 'styled-components/macro'

export const StyledForm=styled.form`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    @media only screen and (max-width:950px){
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
    }
`

export const Img=styled.img.attrs((props)=>({
    src:props.src
}))`
    filter: brightness(0) invert(1);
    width:22px;
    height:20px;
    margin-left:10px;
    @media only screen and (max-width:950px){
        height:15px;
        width:15px;
    }
`
export const Submit=styled.button`
    height:62px;
    width:210px;
    font-size: 25px;
    background:#db0510;
    color:#fff;
    line-height:1.4;
    padding-bottom:7px;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
    @media only screen and (max-width:950px){
        font-size: 16px;
        height:40px;
        width:140px;
        margin-top:8px;
        padding:0;
    };
    &:hover{    
        background:#e50914;
    }
`

export const Text = styled.h3`
    width:80%;
    height:auto;
    color:#fff;
    margin-bottom:13px;
    text-align:center;
    font-size:1.1em;
    position:relative;
    margin-left:auto;
    margin-right:auto;
    right:0;
    left:0;
    @media (max-width:550px){
        width:88%;
        font-size:1em;
    }
`