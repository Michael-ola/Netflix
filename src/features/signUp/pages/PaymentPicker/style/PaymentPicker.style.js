import styled from 'styled-components/macro'

export const Container = styled.div`
width:100%;
padding:3em 5%;
margin-bottom:16%;
display:flex;
flex-direction:column;
align-items:center;
&  p{
    text-align:center;
    @media only screen and (max-width:600px){
        text-align:left;
    }
}

@media only screen and (max-width:600px){
    align-items:flex-start;
}
`

export const LockImage = styled.img`
display:block;
width:50px;
height:50px;
margin-bottom:3em;
`

export const ButtonContainer= styled.div`
min-width:270px;
margin-top:2em;
font-size:0.8em;
& a{
    text-decoration:none;
}
& img{
    width:16px;
    height:16px;
}
& p{
    width:100%;
    display:flex;
    align-items:flex-end;
    justify-content:flex-end;
}
@media only screen and (max-width:450px){
    width:100%;
}
`
export const Button = styled.button`
width:100%;
border: 2px solid #ccc;
border-radius:5px;
background:#fff;
display:flex;
padding:1.5em 0.7em;
align-items:center;
& div:nth-of-type(1){
    display:flex;
    &  span{
        display:flex;
        gap:3px;
        font-size:1rem;
        color:#333;
        & img{
            display:block;
            width:40px;
            height:25px;
            margin:0 3px;
        }
        &:last-of-type{
            margin:0 clamp(3em,15vw,10em) 0 1em;
        }
    }
    @media only screen and (max-width:450px){
        flex-direction:column;
    }
}
& div:nth-of-type(2){
    flex-grow: 1;
    &  img{
        display:block;
        margin-left:auto;
        width:19px;
        height:19px;
    }
}
`