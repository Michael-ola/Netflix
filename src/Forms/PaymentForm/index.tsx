import React,{useState} from 'react'
import {Form,CardIcon,FormHeader,Step,AgreementContainer} from './style/PaymentForm.style'
import {Link,useNavigate} from 'react-router-dom'
import SubmitButton from '../../components/NextPrevButton'
import FormContextProvider from '../../context/formsContext'
import FirstName from './firstName'
import LastName from './lastName'
import CardNumber from './cardNumber'
import SecurityCode from './securityCode'
import ExpirationDate from './expirationDate'
import PlanInfo from './PlanInfo'
import CheckBox from './checkBox'


const visaImg=require('../../assets/images/icons/visa-v3.png')
const mastercardImg=require('../../assets/images/icons/mastercard-v2.png')
const verveImg=require('../../assets/images/icons/icon_verve.png')

const PaymentForm = () => {
    const [submitButtonClicked,setSubmitButtonClicked]=useState(false)
    const navigate=useNavigate()

    const [formObject,setFormObject]=useState(
        {
            firstName:'',
            lastName:'',
            cardNumber:'',
            expirationDate:'',
            securityCode:'',
            checkBox:false,
        }
    )

    
    const setFormData=(inputName:string,value:boolean|boolean) => {
        setFormObject(prevData=>{
            const formCopy={...prevData,[inputName]:value}
            return formCopy
        })
    }

    const buttonClickedHandler=(event:React.MouseEvent<HTMLButtonElement>)=>{
        setSubmitButtonClicked(true)
    }
    const formSubmitHandler=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const emptyFields=Object.entries(formObject).filter(input=>{
            return !input[1]
        });

        if((emptyFields?.[0]?.[0]==='lastName' && emptyFields.length===1) || emptyFields.length===0){
           navigate('/select-user')
        }
    }
    return (
        <FormContextProvider setFormData={setFormData} submitButtonClicked={submitButtonClicked}>
            <FormHeading/>
            <Form autoComplete='off' onSubmit={formSubmitHandler}>
                <FirstName/>
                <LastName/>
                <CardNumber/>
                <ExpirationDate/>
                <SecurityCode/>
                <PlanInfo/>
                <Agreement/>
                <CheckBox/>
                <SubmitButton onClick={buttonClickedHandler}>Start Membership</SubmitButton>
            </Form>
        </FormContextProvider>
    )
}

const  FormHeading=()=>(
    <>
        <Step>STEP <strong>3</strong> OF <strong>3</strong></Step>
        <FormHeader>Set up your credit or debit card</FormHeader>
        <div>
            <CardIcon src={visaImg}/>
            <CardIcon src={mastercardImg}/>
            <CardIcon src={verveImg}/>
        </div>
    </>
)

const Agreement=()=>(
    <AgreementContainer>
        <p>Your payments will be processed internationally. Additional bank fees may apply</p>
        <p>By checking the checkbox below, you agree to our <Link to="https://help.netflix.com/legal/termsofuse">Terms of Use</Link>,
           <Link to="https://help.netflix.com/legal/privacy">Privacy Statement</Link>,
           and that you are over 18. Netflix will automatically continue your membership and
           charge the membership fee (currently ₦4,400/month) to your payment method until you
           cancel. You may cancel at any time to avoid future charges.
        </p>
    </AgreementContainer>
)


export default PaymentForm
