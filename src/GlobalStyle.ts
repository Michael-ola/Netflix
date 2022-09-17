import {createGlobalStyle} from "styled-components"

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