import styled from 'styled-components/macro'
import SoundButton from 'containers/SoundControlButton'
import ReplayButton from 'components/ReplayVideoButton'

export const Container = styled.div`
position:relative;
height:clamp(20vh,50vw,105vh);
margin-bottom:-10%;
overflow:visible;
&::before{
    content:'';
    display:block;
    position:absolute;
    top:0;
    left:0;
    width:60%;
    height:100%;
    background:linear-gradient(77deg,rgba(0,0,0,.6),transparent 85%);
}
`

export const MovieVideo=styled.video`
width:100%;
height:100%;
object-fit:cover;
`
export const MoviePoster=styled.img`
width:100%;
height:100%;
background-repeat:no-repeat;
background-size:cover;
background-position:center;
display:block;
`
export const MovieDataContainer= styled.div`
position:absolute;
margin:auto;
left:clamp(1px,5vw,70px);
top:-12%;
bottom:0;
display:flex;
flex-direction:column;
justify-content:center;
background:transparent;
user-select:none;
`

export const MovieTitle=styled.img`
display:block;
width:clamp(30px,40vw,94%);
height:clamp(30px,15vw,200px);
background-repeat:no-repeat;
background-size:cover;
background-position:center;
display:block;
margin-bottom:4%;
`

export const Controls= styled.div`
display:flex;
align-items:center;
margin:clamp(3px,2vw,20px) 0;
`

export const MovieDescription=styled.p`
color:#fff;
font-size:clamp(0.1rem,1.6vw,1rem);
font-weight:900;
max-width:45ch;
text-align:justify;
margin-top:4%;
`
export const AgeRating= styled.div`
position:relative;
padding:0.2em 2.5em 0.2em 1em;
color:#fff;
background:rgba(51,51,51,.6);
font-size:clamp(0.5em,1.5vw,1.1em);
&::before{
    content:'';
    display:block;
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:0.2em;
    background:#DCDCDC;
}
`

export const SoundControlButton= styled(SoundButton)`
--size:clamp(0.7cm,5vw,1cm);
width:var(--size);
height:var(--size);
`
export const ReplayVideoButton= styled(ReplayButton)`
--size:clamp(0.7cm,5vw,1cm);
width:var(--size);
height:var(--size);
`

export const ControlsContainer=styled.div`
position:absolute;
bottom:30%;
right:0;
display:flex;
align-items:center;
gap:5%;
`

export const TopTen=styled.div`
font-weight:bold;
font-size:clamp(0.5rem,1.6vw,1.3rem);
color:#fff;
display:flex;
align-items:center;

& img{
    --size:clamp(10px,4vw,30px);
    width:var(--size);
    height:var(--size);
}
`