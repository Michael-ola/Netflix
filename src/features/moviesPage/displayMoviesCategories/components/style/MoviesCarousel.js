import styled from 'styled-components/macro'

export const Container=styled.div`
display:flex;
flex-direction:column;
margin-top:clamp(1em,1.6vw,2.5em);
overflow:visible;
z-index:4;
&:hover {
    z-index:5;
}
`
