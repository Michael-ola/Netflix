import React from 'react'
import {Container,Ul,Li,AnchorTag,Paragraph} from './styles/Footer'

interface FooterItemProps{
    link:string,
    children:React.ReactNode
}

interface FooterProps{
    footerItems:{name:string,link:string}[],
    className?:string,
    prepend?:JSX.Element|JSX.Element[],
    append?:JSX.Element|JSX.Element[] 
}

export default function Footer({footerItems,className,prepend,append}:FooterProps){
    return (
        <Container className={className}>
            {prepend && prepend}
            <FooterItemGenerator footerItems={footerItems}/>
            {append && append}
        </Container>
    )
}

const FooterItem=(props:FooterItemProps):JSX.Element=>{
    return(
        <Li>
            <AnchorTag  href={props.link}>{props.children}</AnchorTag>
        </Li>
    )
}

const FooterItemGenerator = ({footerItems}:FooterProps) =>{
    return(
        <Ul>{
            footerItems.map((item,id)=>{
                return <FooterItem key={id} link={item.link}>{item.name}</FooterItem>
            })
        }</Ul>
    )
}