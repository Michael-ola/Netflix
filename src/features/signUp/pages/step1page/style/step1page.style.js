import styled from 'styled-components/macro'

export const Container = styled.div`
width:100%;
display:flex;
justify-content:center;
margin-bottom:13%;
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
        opacity:1;
        transform:translateX(0);
    }
    to{
        opacity:0;
        transform:translateX(-40%);
    }
}
`
export const InnerContainer = styled.div`
box-sizing: border-box;
width:360px;
margin:8em 3em 4em 3em;
`

export const HeaderImage = styled.img`
display:block;
margin:0 auto;
margin-bottom: 2em;
width:260px;
`
export const TextContainer=styled.div`
width:100%;
color:#333333;
text-align:center;
@media only screen and (max-width:600px){
    text-align:left;
}
`