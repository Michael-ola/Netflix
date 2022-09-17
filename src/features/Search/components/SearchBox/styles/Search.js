import styled from 'styled-components/macro'

export const SearchComponentContainer=styled.div`
display:flex;
flex-direction:row-reverse;
height:auto;
align-items:center;
position:relative;
width:33px;
${({clickState})=>clickState && `
width:275px;
`};
margin-right:0.6em;
overflow:hidden;
transition:width 0.2s linear;
@media only screen and (max-width:400px){
    display:none;
}
`

export const SearchIcon=styled.img.attrs(props=>({
    src:'assets/images/icons/search.png'
}))`
position:relative;
right:0;
width:21px;
display:block;
height:21px;
${({clickState})=>clickState && `
width:25px;
height:25px;
`};
filter:brightness(0) invert(1);
margin:4px;
margin-right:5px;
`

export const SearchContainer=styled.div`
position:absolute;
z-index:2;
right:0;
display:flex;
align-items:center;
background:#000;
box-sizing:border-box;
width:0px;
${({clickState,blurState})=>clickState?`
animation: fadeOut 0.2s linear forwards 0.2s;
`:blurState && `
animation: fadeIn 0.2s ease-out forwards;
`};

@keyframes fadeIn {
    0%{
        width:100%;
        border: 1px solid #fff;
    }

    60%{
        border: 1px solid #fff;
        visibility:hidden;
    }
    100%{
        width:0%;
        visibility:hidden;
    }
};

@keyframes fadeOut {
    0%{
        width:0%;
        border: 1px solid #fff;
    }
    100%{
        width:100%;
        border: 1px solid #fff;
    }
}
`

export const SearchInput=styled.input`
flex:1;
width:calc(100% - 21px);
height:25px;
background:inherit;
border:none;
color:#fff;
font-weight:bold;
font-size:1em;
`