import React,{useState,useEffect} from 'react'
import {createPortal}  from 'react-dom'
import useFormContext from '../../customHooks/useFormContext'
import Input from '../../containers/Input'
import styled from 'styled-components/macro'
import CVVInfoOverlay from '../../components/CVVInfoOverlay'
const infoImage=require('../../assets/images/icons/infoImg.png')


const SecurityCode=()=>{
    const [value,setValue]=useState('');
    const [error,setError] = useState('');
    const [styleClass,setStyleClass]=useState<string>(null);
    const [openLayout,setOpenLayout]=useState(false);
    const formData=useFormContext();
    const submitButtonClicked=formData.submitButtonClicked as boolean;
    const setFormData=formData.setFormData as Function;


    useEffect(() => {
        submitButtonClicked && errorValidator(value);
    },[submitButtonClicked,value]);


    function errorValidator(value:string){
        if(value){
            if(value.length<3){
                setError('Please enter a valid CVV code.');
            }
            else if(value.length===4 || value.length===3){
                setError('');
                setFormData('securityCode',value);
                setStyleClass('noError-indicator');
            }
        }
        else{
            setError('Please enter a security code (CVV)')
            setStyleClass('error-indicator');
        }
    }

    const changeHandler=(event:React.ChangeEvent<HTMLInputElement>) => {
       if(event.target.value.length<5){
            setValue(event.target.value.trim());
            errorValidator(event.target.value.trim());
       }
    }
    const onInfoClicked=()=>{
        setOpenLayout(true);
    }
    return(
        <InputContainer>
            <Input type='text' placeholder='Security code (CVV)' value={value} className={'input '+styleClass}
             onChangeHandler={changeHandler}  error={error}/>
            <Info src={infoImage} onClick={onInfoClicked}/>
            {openLayout && createPortal(<CVVInfoOverlay setOpenLayout={setOpenLayout}/>,document.getElementById('CVVInfoOverlay'))}
        </InputContainer>
    )
}

const InputContainer=styled.div`
position:relative;
`

const Info=styled.img`
display:block;
height:40px;
aspect-ratio:1/1;
position:absolute;
right:3%;
top:10px;
z-index:8;
`

export default SecurityCode



