import React from 'react'
import {Container,LockImage,ButtonContainer,Button} from './style/PaymentPicker.style'
const verveLogo=require('../../../assets/images/icons/icon_verve.png')
const mastercardLogo=require('../../../assets/images/icons/mastercard-v2.png')
const visaLogo=require('../../../assets/images/icons/visa-v3.png')
const secureIcon=require('../../../assets/images/icons/secure-server-icon.png')
const lockImage=require('../../../assets/images/icons/lock.png')
const chevronRight=require('../../../assets/images/icons/chevron-right2.png')


const PaymentPicker = () => {
    return (
        <Container>
            <LockImage src={lockImage}/>
            <p style={{fontSize: '0.8rem'}}>STEP <strong>3</strong> OF <strong>3</strong></p>
            <p style={{fontWeight: 'bold',fontSize:'2rem',margin:'0.2em 0'}}>Choose how to pay</p>
            <p style={{maxWidth:'19ch',marginBottom:'0.5em'}}>
                Your payment is encrypted and you can change how you pay anytime.
            </p>
            <p style={{fontWeight: 'bold',maxWidth:'18ch'}}>Secure for peace of <br/>mind.<br/>Cancel easily online.</p>
            <ButtonContainer>
                <p><span>End-to-end encrypted</span><img src={secureIcon}/></p>
                <Button>
                    <div>
                        <span>Credit or Debit Card</span>
                        <span>
                            <img src={visaLogo}/>
                            <img src={mastercardLogo}/>
                            <img src={verveLogo}/>
                        </span>
                    </div>
                    <img src={chevronRight}/>
                </Button>
            </ButtonContainer>
        </Container>
    )
}

export default PaymentPicker
