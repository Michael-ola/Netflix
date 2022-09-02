import React,{useState,useEffect} from 'react'
import useFormContext from '../../customHooks/useFormContext'
import Input from '../../containers/Input'

const CardNumber=()=>{
    const [value,setValue]=useState('');
    const [error,setError] = useState('');
    const [styleClass,setStyleClass]=useState<string>(null);
    const formData=useFormContext();
    const submitButtonClicked=formData.submitButtonClicked as boolean;
    const setFormData=formData.setFormData as Function;

    const requiredMessage='Please enter a card number.'
    const errorMessage='Please enter a valid credit card number.'
    const MAX_CREDIT_CARD_LENGTH=18;
    const MIN_CREDIT_CARD_LENGTH=16;

    useEffect(() => {
        submitButtonClicked && errorValidator(value)
    },[submitButtonClicked,value]);


    function errorValidator(value:string){
        const inputLength = value.length;
        if(inputLength === MAX_CREDIT_CARD_LENGTH || inputLength === MIN_CREDIT_CARD_LENGTH) {
            if(/^[0-9]+$/.test(value)===true){
                setFormData('cardNumber',value);
                setError('');
                setStyleClass('noError-indicator');
            }
            else{
                setStyleClass('error-indicator');
                setError(errorMessage);
            }
        }
        else if(inputLength===0){
            setStyleClass('error-indicator');
            setError(requiredMessage);
        }
        else{
            setStyleClass('error-indicator');
            setError(errorMessage);
        }
    }
    

    const changeHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value.trim());
        errorValidator(event.target.value.trim());
    }
    return(
        <Input type='text' value={value} placeholder='Card number' className={'input '+styleClass} onChangeHandler={changeHandler}
        error={error}/>
    )
}


export default CardNumber