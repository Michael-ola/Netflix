import styled from 'styled-components/macro'

export const Container=styled.div`
position:relative;
width:100%;
min-height:100vh;
overflow:visible;
overflow-x:hidden;
background:#141414;
display:flex;
flex-direction:column;

${({isSearchText})=>isSearchText &&`
height:100vh;
`}
`

export const MoreInfo=styled.div`
position:fixed;
top:0;
left:0;
z-index:12;
overflow-y:auto;
overflow-x:hidden;
height:100vh;
max-width:100vw;
background:rgba(0,0,0,0.7);
`