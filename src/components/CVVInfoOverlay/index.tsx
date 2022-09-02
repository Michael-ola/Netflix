import React from 'react'
import  {Container,CloseButton,CloseIcon,Text} from './style/CVVInfoOverlay.style'
const close =require('../../assets/images/icons/close-slim.png')

const CVVInfoOverlay = ({setOpenLayout}:{setOpenLayout:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const closeClicked=() => {
        setOpenLayout(false)
    }
    return (
        <Container>
            <CloseButton onClick={closeClicked}>
                <CloseIcon src={close}/>
            </CloseButton>

            <Text>Your card's security code (CVV) is the 3 or 4 digit number located on the back of most cards.</Text>
        </Container>
    )
}

export default CVVInfoOverlay
