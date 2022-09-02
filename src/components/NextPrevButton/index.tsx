import React from 'react'
import {Button} from './style/NextPrevButton.style'

interface ButtonType{
    className?: string,
    onClick?:(event:React.MouseEvent<HTMLButtonElement>) => void,
    children: string
}

const NextPrevButton = ({className,onClick,children}:ButtonType) => {
    return (
       <Button className={className} onClick={onClick}>{children}</Button>
    )
}

export default NextPrevButton
