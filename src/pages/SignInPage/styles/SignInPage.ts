import styled  from 'styled-components/macro'
import Footer from '../../../components/Footer/Footer'

export const Container= styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    background-image:url(${(props:{image:string})=>props.image});
    width:100%;
    overflow:hidden;
    min-height:100vh;
    background-repeat:no-repeat;
    background-size:cover;
    background-postition:center;
    object-fit:cover;
    @media only screen and (max-width:740px){
        background:#000;
    };
    &:before{
        content:'';
        display:block;
        position:absolute;
        top:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.6);
    }
`

export const StyledFooter= styled(Footer)`
position:relative;
bottom:0;
z-index:3;
margin-top:70px;
background:rgba(0,0,0,0.8);
border:none;
@media only screen and (max-width:1024px){
    min-height:30vh;
}
@media only screen and (max-width:500px){
    margin-top:10px;
    padding:30px 0 12px 0;
}
`