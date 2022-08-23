import React from 'react'
import {Container, Title, Subtitle,Image,
         TextContainer
        } from './styles/Jumbotron'
const jumbotronData=require('../../data/jumbotron.json')

interface jumbotronProps{
    id:number,
    title:string,
    subTitle:string,
    image?:string,
    alt?:string,
    direction:string
}

const Jumbotron = (props:jumbotronProps):JSX.Element => {
    return (
        <JumbotronContainer image={props.image} flexDirection={props.direction}>
            <JumbotronTextContainer image={props.image} flexDirection={props.direction}>
                <JumbotronTitle title={props.title}/>
                <JumbotronSubtitle image={props.image} subtitle={props.subTitle}/>
            </JumbotronTextContainer>
            {props.image?
                <JumbotronImage image={props.image} alt={props.alt}/>
            :null}
        </JumbotronContainer>
    )
}

const JumbotronContainer=(props:{image:string,flexDirection:string,children:JSX.Element[]}) :JSX.Element => {
    return(
        <Container {...props}>{props.children}</Container>
    )
}

const JumbotronTitle=(props:{title:string}):JSX.Element =>{
    return (
        <Title>{props.title}</Title>
    )
}

const JumbotronImage=(props:{image:string,alt:string}):JSX.Element =>{
    return (
        <Image src={props.image} alt={props.alt}/>
    )
}

const JumbotronSubtitle=(props:{image:string,subtitle:string}):JSX.Element =>{
    return (
        <Subtitle {...props}>{props.subtitle}</Subtitle>
    )
}

const JumbotronTextContainer=(props:{image:string,flexDirection:string,children:JSX.Element[]}):JSX.Element =>{
    return (
        <TextContainer {...props}>{props.children}</TextContainer>
    )
}

export const JumbotronGenerator=():JSX.Element =>{
  return jumbotronData.map((data):JSX.Element =>{
    return(
      <Jumbotron key={data.id} id={data.id} title={data.title}
      subTitle={data.subTitle} image={data.image} 
      alt={data.alt} direction={data.direction}
      />
    )
  })
}