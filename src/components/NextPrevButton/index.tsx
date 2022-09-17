import React from 'react'
import {Button,Spinner,SpinnerImg} from './style/NextPrevButton.style'

const spinImg=require('assets/images/misc/spinner.png')

interface ButtonType{
    className?: string,
    onClick?:(event:React.MouseEvent<HTMLButtonElement>) => void,
    children: string,
    spinner?:boolean
}

const NextPrevButton = ({className,onClick,children,spinner}:ButtonType) => {
    return (
       <Button className={className} onClick={onClick}>
            {spinner &&<Spinner><SpinnerImg src={spinImg}/></Spinner>}
            {!spinner && children}
       </Button>
    )
}

export default NextPrevButton
