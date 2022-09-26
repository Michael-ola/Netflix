import styled from 'styled-components/macro'

export const CarouselSliderContainer=styled.div`
position:relative;
margin-top:0.5%;
overflow:visible;
z-index:3;
`

export const CarouselSliderInnerContainer=styled.div`
display:flex;
align-items:center;
overflow:visible;
box-sizing: border-box;
width:90%;
margin-left:5%;
transition:transform 0.7s ease-in-out;
${({sliderIndex,controlClicked})=>controlClicked && sliderIndex?`transform:translateX(${sliderIndex*-100}%)`
:
`translateX(0)`};
`
export const CarouselRightControl=styled.button`
--font:clamp(0.8em,2vw,1.7em);
--moviePadding:0.125rem;
display:flex;
color:#fff;
border:none;
outline:none;
align-items:center;
justify-content:center;
height:calc(100% + var(--moviePadding));
width:calc(5% + var(--moviePadding));
font-size:0;
font-weight:400;
position:absolute;
z-index:3;
right:0;
top:0;
background:hsla(0,0%,8%,.5);
border-radius:2px 0  0 2px;
${({parentHovered})=>parentHovered &&`
font-size:calc(1.9 * var(--font));
`}
&:hover {
    background:hsla(0,0%,8%,.7);
    font-size:calc(2.8 * var(--font));
}
`
export const CarouselLeftControl=styled(CarouselRightControl)`
display:none;
${({controlClicked})=>controlClicked &&`
display:flex;
`}
border-radius:0 2px 2px 0;
left:0;
top:0;
`