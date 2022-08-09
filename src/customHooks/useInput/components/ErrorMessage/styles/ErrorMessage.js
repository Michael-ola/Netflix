import styled from 'styled-components/macro'


export const Message = styled.p`
    height:auto;
    color:#E87C03;
    font-size:${(props)=>(props && props.font) || 'clamp(12px,1.6vw,18px)'};
    overflow:hidden;
    padding:2px;
    font-weight:450;
    background:rgba(0,0,0,0.1);
`