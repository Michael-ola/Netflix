import styled from 'styled-components/macro'
import 'react-phone-number-input/style.css'

const mediaStyle=(customStyle)=>{
    let mediaStyle=``
    customStyle.media && customStyle.media.map((config)=>{
        mediaStyle+= `@media only screen and (${config.type}:${config.breakpoint}){
            width:${config.width};
            height:${config.height};
        };`
        return 0;
    })
    return mediaStyle;
}

const userStyle=(customStyle)=>{
    let style=``
    Object.entries(customStyle).map(arr=>{
        if(arr[0]!=='media'){
            let holder= arr[0].replace(/[A-Z][a-z]*/g, str => '-' + str.toLowerCase())
            style+=`${holder}:${arr[1]};`
        }
        return 0;
    })
    
    return style;
}

export const InputWrapper=styled.div`
position:relative;
display:flex;
width:450px;
border-radius:0px;
flex-direction:column;
color:#000;
${(args)=>args && args.customStyle? userStyle(args.customStyle):null}
background:inherit;
height:auto;
${(args)=>args && args.customStyle? mediaStyle(args.customStyle):null}
`

export const FieldWrapper=styled.div`
position:relative;
top:0;
color:inherit;
width:100%;
min-height:${(args)=>((args.customStyle && args.customStyle.height))};
border:${(args)=>(args.labelClicked &&((args.customStyle && args.customStyle.border) || '1px solid blue'))};
box-sizing:border-box;
background:${(args)=>((args.customStyle && args.customStyle.background) || '#fff')};
border-radius:inherit;
overflow:hidden;

&:after {
    content:'';
    display:inline-block;
    height:2px;
    width:100%;
    position:absolute;
    bottom:0;
    left:0;
    z-index:3;
    background:${(args)=>args.error?'#E87C03':''};
}
`

export const Span=styled.span`
height:auto;
overflow:hidden;
`


