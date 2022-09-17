import styled from 'styled-components/macro'

export const Container = styled.div`
width:100%;
margin-bottom:14%;
& button {
    margin-bottom:2em;
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

export const InnerContainer = styled.div`
box-sizing: border-box;
width:440px;
margin:2em auto;
@media only screen and (max-width:500px){
    width:100%;
    padding:0 5%;
    
}
`

export const TextContainer=styled.div`
width:100%;
color:#333333;
`