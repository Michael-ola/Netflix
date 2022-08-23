import styled from 'styled-components/macro'

export const CardImage=styled.img`
display:block;
align-self:flex-start;
width:26px;
height:26px;
filter:invert(16%) sepia(93%) saturate(6440%) hue-rotate(352deg) brightness(88%) contrast(104%);
`

export const StyledCard= styled.li`
list-style-type: none;
display:flex;
align-items:center;
justify-content:center;
gap:0.7em;
margin-bottom:1.4em;
`

export const CardText = styled.span`
max-width:26ch;
font-size:1.1rem;
`
