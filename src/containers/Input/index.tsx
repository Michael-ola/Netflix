import React,{useEffect,useRef,useState} from 'react'
import {InputContainer,FieldWrapper,InputField,FieldLabel,Error} from './style/Input.style'


interface InputType{
    type:string,
    placeholder?:string,
    style?:React.CSSProperties,
    className?:string,
    submitButtonClicked?:boolean,
    onChangeHandler?:(event:React.ChangeEvent<HTMLInputElement>)=>void,
    value:string,
    error?:string
}

const Input=({type,placeholder,style,className,submitButtonClicked,onChangeHandler,value:inputValue,error}:InputType)=>{
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [labelClicked,setLabelClicked] =useState(false)

    useEffect(() => {
        (inputValue || submitButtonClicked) && setLabelClicked(true) 
    },[inputValue,submitButtonClicked])

    const labelClickedHandler=()=>{
        setLabelClicked(true);
        inputRef?.current?.focus()
    }
    const inputBlurHandler=()=>{
        !inputValue && setLabelClicked(false);
        // inputRef.current.blur();
    }
    const inputChangeHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
       onChangeHandler?.(event);
       event.target.value && setLabelClicked(true);
    }
    const inputFocusHandler=()=>{
        setLabelClicked(true)
    }

    return(
        <InputContainer>
            <FieldWrapper style={style} className={className}>
                <InputField type={type} ref={inputRef} value={inputValue}
                    onChange={inputChangeHandler} onBlur={inputBlurHandler}
                    onFocus={inputFocusHandler}/>
                <FieldLabel {...{labelClicked}} tabIndex={0} onClick={labelClickedHandler}>{placeholder}</FieldLabel>
            </FieldWrapper>
            <Error>{error}</Error>
        </InputContainer>
    )
}

export default Input