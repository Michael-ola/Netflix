import styled from 'styled-components/macro'

export const Form = styled.form`
& .input input{
    height:60px;
    font-weight:400;
    font-size:1rem;
}
& .error-indicator{
    border-color:#b92d2b;
}
& .noError-indicator{
    border-color:#5fa53f;
}
width:100%;
`

export const CardIcon=styled.img`
width:30px;
height:22px;
margin-right:7px;
`

export const FormHeader=styled.p`
font-weight:900;
font-size:2rem;
margin:0 0 0.2em 0;
`

export const Step=styled.p`
font-size:0.9rem;
`
export const AgreementContainer=styled.div`
color:#8c8c8c;
font-size:0.8rem;
&  a{
    text-decoration:none;
    &:hover {
        text-decoration: underline;
    }
}
& p:nth-of-type(2){
    margin-top:2em;
}
`