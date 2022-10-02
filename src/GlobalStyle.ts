import {createGlobalStyle} from "styled-components"
const netflix_sans_regular =require('assets/netflix-sans-font/NetflixSans-Regular.woff2')
const netflix_sans_bold =require('assets/netflix-sans-font/NetflixSans-Bold.woff2')
//const netflix_sans_light =require('assets/netflix-sans-font/NetflixSans-Light.woff2')

export default createGlobalStyle`
    @font-face {
        font-family: NetflixSans;
        src: url(${netflix_sans_regular});
        font-weight:normal;
    }

    @font-face {
        font-family: NetflixSans;
        src: url(${netflix_sans_bold});
        font-weight: bold;
    }

   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: NetflixSans,sans-serif;
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