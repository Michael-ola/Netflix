import {createGlobalStyle} from "styled-components"
import styled from 'styled-components/macro'

export default createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif;
   }
   main{
       height:100vh;
        min-height:100vh;
        width:100vw;
   }
   html,body{
       height:100%;
   }
`


export const Logo=styled.img`
  width:clamp(40px,10vw,100px);
  height:clamp(10px,5vw,70px);
  overflow:hidden;
`