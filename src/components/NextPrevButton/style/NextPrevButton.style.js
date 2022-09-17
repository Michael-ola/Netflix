import styled from 'styled-components/macro'

export const Button=styled.button`
width:100%;
position:relative;
margin:1em auto 0 auto;
height:65px;
background:#e50914;
border-radius:5px;
color:#fff;
font-weight:bold;
font-size:1.3rem;
border:none;
&:hover {
    background:#f6121d;
}
`

export const Spinner=styled.div`
position:absolute;
top:0;
border-radius:inherit;
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:100%;
z-index:3;
background:rgba(255,255,255,0.2);
`

export const SpinnerImg=styled.img`
display:block;
width:30px;
height:30px;
animation:spinner 1s linear infinite;

@keyframes spinner{
    from{
        transform:rotate(0deg);
    }
    to{
        transform:rotate(360deg);
    }
}
`