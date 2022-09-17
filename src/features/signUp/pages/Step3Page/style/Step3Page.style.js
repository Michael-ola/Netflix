import styled from 'styled-components/macro'

export const Container = styled.div`
margin:7em auto 14% auto;
width:350px;
display:flex;
flex-direction:column;
align-items:center;
& a{
    width:100%;
}
@media only screen and (max-width:500px){
    align-items:flex-start;
    margin-right:8%;
    margin-left:8%;
}
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
        transform:translateX(-40%);
    }
}
`

export const Image = styled.img`
display:block;
width:50px;
height:50px;
margin-bottom:1.5em;
`
export const StepText = styled.p`
font-size:0.8rem;
`
export const CardsContainer= styled.ul`
width:100%;
margin-top:1.5em;
display:flex;
flex-direction:column;
align-items:center;
@media only screen and (max-width:500px){
    align-items:flex-start;
}

`