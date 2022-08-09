import React,{createContext} from 'react';

interface customStyleType{
    background?:string,
    switchBackground?:string,
    color?:string,
    margin?:string,
    padding?:string,
    width?:string,
    height?:string,
    borderRadius?:string,
    border?:string,
    labelColor?:string,
    fontSize?:string,
    errorFontSize?:string,
    media?:{
        type:'max-width'|'min-width',
        breakpoint:string,
        width:string,
        height:string,
        borderRadius?:string
    }[]
}

interface InputProps{
    customStyle?:customStyleType,
    placeholder:string,
    errors?:object,
    type:string,
    Ref:Function,
    control?:any,
    inputChangeHandler:()=>void,
    inputBlurHandler:()=>void,
    inputRef:React.MutableRefObject<HTMLInputElement>,
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void,
    rest:object,
    labelClickedHandler:()=>void,
    labelClickState:boolean,
    inputValue?:()=>string,
    changeHandlerProp?:()=>void,
}


export const InputContext=createContext<InputProps|null>(null)

export const ContextProvider=(props)=>{
    return(
        <InputContext.Provider value={props}>
            {props.children}
        </InputContext.Provider>
    )
}