import  styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export  const Container= styled.header`
    width:100%;
    height:110vh;
    position: relative;
    border-bottom: 8px solid #222;
    box-sizing: border-box;
    overflow:hidden;
    
    @media only screen and (max-width:1024px){
        height:70vh;
    };
    @media only screen and (max-width:550px){
        height:72vh;
        min-height:72vh;
    };
    @media only screen and (max-height:500px){
        height:120vh;
        min-height:120vh;
    }
`
export const Nav= styled.nav`
    width:100%;
    height:10%;
    position:absolute;
    overflow:hidden;
    top:0;
    z-index:3;
    display:flex;
    align-items:flex-end;
`

export const NavButton=styled(Link)`
    width:95px;
    height:40px;
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    box-sizing:border-box;
    text-align:center;
    text-decoration:none;
    border:none;
    outline:none;
    padding:0.5em;
    color:#fff;
    border-radius:5px;
    font-weight:bold;
    background:#e50914;
    font-size:16px;
    right:65px;
    @media only screen and (max-width:550px){
        width:80px;
        height:35px;
        font-size:14px;
        right:20px;
    }
`

export const HeaderImage=styled.img.attrs((props)=>({
    src:"https://assets.nflxext.com/ffe/siteui/vlv3/970e664f-2df4-47ce-b4fa-446082f5abc1/1a40ef0e-0488-4258-8ea1-da0527eb2b01/NG-en-20220523-popsignuptwoweeks-perspective_alpha_website_small.jpg",
    srcset:`https://assets.nflxext.com/ffe/siteui/vlv3/970e664f-2df4-47ce-b4fa-446082f5abc1/1a40ef0e-0488-4258-8ea1-da0527eb2b01/NG-en-20220523-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, 
    https://assets.nflxext.com/ffe/siteui/vlv3/970e664f-2df4-47ce-b4fa-446082f5abc1/1a40ef0e-0488-4258-8ea1-da0527eb2b01/NG-en-20220523-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w,
    https://assets.nflxext.com/ffe/siteui/vlv3/970e664f-2df4-47ce-b4fa-446082f5abc1/1a40ef0e-0488-4258-8ea1-da0527eb2b01/NG-en-20220523-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w`
}))`
    height:106%;
    transform:translateY(-5%);
    display:block;
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    @media only screen and (max-width:950px){
        height:100%;
        transform:translateY(0)
    }
`
export const Body= styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:0;
    z-index:2;
    background:linear-gradient(to top,rgba(0,0,0,0.8) 0,rgba(0,0,0,0.5) 50%,rgba(0,0,0,0.8) 100%);
`
export const TextContainer = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    color:#fff;
    @media only screen and (max-width:600px){
        padding-top:100px;
    }
`

export const TextTitle = styled.h1`
    width:600px;
    max-width:90%;
    line-height:1.1;
    overflow:hidden;
    margin-bottom:15px;
    height:auto;
    font-weight:bold;
    text-align:center;
    font-size:2.8em;
    @media (max-width:550px){
        width:90%;
        font-size:1.7em;
    }
`
export const TextSubtitle = styled.h2`
    width:auto;
    height:auto;
    color:#fff;
    text-align:center;
    margin-bottom:15px;
    font-size:1.4em;
    @media (max-width:550px){
        width:90%;
        font-size:1.2em;
    }
`

