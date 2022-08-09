import styled from 'styled-components/macro'
export {Logo} from '../../../GlobalStyle'

export const Container=styled.div`
    position:relative;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background:#141414;
    color:#fff;
`
export const Navbar=styled.div`
position:fixed;
top:0;
z-index:5;
width:100%;
display:flex;
align-items:center;
background:linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
`
export const Heading=styled.h1`
  text-align: center;
` 
export const UsersListContainer=styled.div`
    width:100%;
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    margin-top:1.2rem;
    margin-bottom:2rem;
`
export const StyledUser=styled.div`
    display:flex;
    flex-direction: column;
    margin: 0 0.7em;
    color:grey;
    &:hover {
        color:#fff;
    }
`
export const StyledProfilesButton=styled.button`
    padding:0.3em 1.5em;
    margin: 0 auto;
    color:grey;
    background:inherit;
    border:1px solid grey;
    margin:1.3rem;
    &:hover {
        color:#fff;
        border-color:#fff;
    }
`

export const StyledUserPicture=styled.img.attrs(props=>({
    src:props.src
}))`
    --size:clamp(90px,10vw,140px);
    width:var(--size);
    height:var(--size);
    background-size:cover;
    background-repeat:no-repeat;
    margin:0 auto;
    box-sizing:border-box;
    border-radius:5px;
    &:hover {
        border:3px solid #fff;
    }
`
export const StyledName=styled.h3`
    text-align:center;
`