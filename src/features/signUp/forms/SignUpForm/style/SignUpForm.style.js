import styled from 'styled-components/macro'

export const Container= styled.div`
 position:relative;
 z-index:3;
 display:flex;
 flex-direction:column;
 margin:7% auto 0 auto;
 width:100%;
 height:auto;
 background:#fff;

 & .error-indicator{
    border-color:#b92d2b;
}
& .noError-indicator{
    border-color:#5fa53f;
}
`
export  const StyledForm = styled.form`
width:100%;
height:auto;
display:flex;
flex-direction:column;
align-items:center;
`