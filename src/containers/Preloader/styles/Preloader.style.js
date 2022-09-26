import styled from "styled-components/macro";

export const Container=styled.div`
display:flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
position:fixed;
z-index: 2;
top: 0;
left: 0;
background:#141414;
`
export const Image=styled.img`
display:block;
width:60px;
height:60px;
animation:spinner 1s linear forwards infinite;

@keyframes spinner {
    from {
        transform:rotate(0)
    }
    to{
        transform:rotate(360deg)
    }
}
`