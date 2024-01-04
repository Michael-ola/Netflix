import React from 'react'
import {Container, Title, Subtitle,Image,
         TextContainer,AnimatedImageContainer,FirstVideo,SecondImageComponent
        } from './styles/Jumbotron'
const jumbotronData=require('data/jumbotron.json')
const boxshot= require('assets/images/misc/boxshot.png')
const downloadingGif=require('assets/images/misc/downloading.gif')
const video= require('assets/images/extras/video-tv-0819.mp4')

interface jumbotronProps{
    id:number,
    title:string,
    subTitle:string,
    image?:string,
    alt?:string,
    direction:string,
    animatedImage?:JSX.Element
}

const Jumbotron = (props:jumbotronProps):JSX.Element => {
    return (
        <JumbotronContainer image={props.image as string} flexDirection={props.direction}>
            <JumbotronTextContainer image={props.image as string} flexDirection={props.direction}>
                <JumbotronTitle title={props.title}/>
                <JumbotronSubtitle image={props.image as string} subtitle={props.subTitle}/>
            </JumbotronTextContainer>
            {props.image?
                <JumbotronImage image={props.image as string} alt={props.alt as string}/>
            :props.animatedImage?props.animatedImage:<></>}
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

const JumbotronImage=(props:{image:string,alt:string,style?:React.CSSProperties}):JSX.Element =>{
    return (
        <Image style={props?.style} src={require(`assets/images/misc/${props.image}`)} alt={props.alt}/>
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
  return jumbotronData.map((data:jumbotronProps,index:number):JSX.Element =>{
    const firstImage=(
        <AnimatedImageContainer>
            <JumbotronImage  style={{position:'relative',maxWidth:'85%'}} image={data.image as string} alt={data.alt as string}/>
            <FirstVideo autoPlay playsInline muted loop>
                <source src={video} type="video/mp4"/>
            </FirstVideo>
        </AnimatedImageContainer>
    )

    const secondImage=(
        <AnimatedImageContainer>
            <JumbotronImage  style={{position:'relative',maxWidth:'95%'}} image={data.image as string} alt={data.alt as string}/>
            <SecondImageComponent>
                <img src={boxshot} alt='boxshot'/>
                <div>
                    <span>Stranger Things</span>
                    <span>Downloading...</span>
                </div>
                <div style={{background:`url(${downloadingGif})`}}></div>
            </SecondImageComponent>
        </AnimatedImageContainer>
    )
    if(index===0){
        return(
            <Jumbotron key={data.id} id={data.id} title={data.title}
            subTitle={data.subTitle} animatedImage={firstImage} 
            alt={data.alt} direction={data.direction}
            />
        )
    }
    if(index===1){
        return(
            <Jumbotron key={data.id} id={data.id} title={data.title}
            subTitle={data.subTitle} animatedImage={secondImage} 
            alt={data.alt} direction={data.direction}
            />
        )
    }
    return(
      <Jumbotron key={data.id} id={data.id} title={data.title}
      subTitle={data.subTitle} image={data.image} 
      alt={data.alt} direction={data.direction}
      />
    )
  })
}