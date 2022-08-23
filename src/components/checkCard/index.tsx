import {StyledCard,CardText,CardImage} from './style/checkCard.style'

const Card=({image,text}:{image:string,text:string}) =>{
    return(
        <StyledCard>
            <CardImage src={image}/>
            <CardText>{text}</CardText>
        </StyledCard>
    )
}

export default Card