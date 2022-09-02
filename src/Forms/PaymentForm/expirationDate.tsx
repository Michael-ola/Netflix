import React,{useState,useEffect} from 'react'
import useFormContext from '../../customHooks/useFormContext'
import Input from '../../containers/Input'

const ExpirationDate=()=>{
    const formData=useFormContext();
    const [error,setError] = useState('');
    const [styleClass,setStyleClass]=useState<string>(null);
    const submitButtonClicked=formData.submitButtonClicked as boolean;
    const setFormData=formData.setFormData as Function;
    const currentYear=new Date().getFullYear();
    const CREDIT_CARD_EXPIRY_RANGE=25;
    const maxYear=currentYear+CREDIT_CARD_EXPIRY_RANGE;
    const expirationYearError=`The expiration year must be between ${currentYear} and ${maxYear}.`;
    const expirationMonthError='Expiration Month must be between 1 and 12!';
    const emptyMonthError='Please enter an expiration month';
    const emptyYearError='Please enter an expiration year.';
    const divider=100;
    const [value,setValue] =useState('')
    
    useEffect(() => {
        submitButtonClicked && errorValidator(value);
    },[submitButtonClicked,value])
  
    function getModulus(value:number,divider:number):number{
        return (value%divider)
    }

    const errorValidator=(value:string)=> {
        const inputArr=value.split('/');
        const month=inputArr[0];
        const year=inputArr[1] || '';
        const yearInteger=+year;
        let monthOk=false;
        let yearOk=false;

        if(value.length>1 && value.lastIndexOf('/')<1 && month.indexOf('/')<0){
            const currentInput=month+'/'+year;
            setValue(currentInput);
        }
        
        if(month){
            if(+month<=12 && +month>0){
                monthOk=true;
                if(month.length===2){
                    setError(emptyYearError);
                    setStyleClass('error-indicator');
                }
            }
            else{
                setError(expirationMonthError)
                setStyleClass('error-indicator');
            }
            if(month.length===1 && error){
                setError(emptyMonthError);
                setStyleClass('error-indicator');
            }
        }
        if(yearInteger){
            if((yearInteger >=currentYear  && yearInteger <= maxYear) ||  (yearInteger >=getModulus(currentYear,divider)  && yearInteger <= getModulus(maxYear,divider))){
                yearOk=true;
            }
            else{
                setError(expirationYearError);
                setStyleClass('error-indicator');
            }
        }

        if(monthOk && yearOk){ 
            setError('');
            setStyleClass('noError-indicator');
            setFormData('expirationDate',value);
        }
        if(!value){
            setError(emptyMonthError);
            setStyleClass('error-indicator');
        }
    }

    const changeHandler =(event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value.trim());
        errorValidator(event.target.value.trim());
    }
  

    return(
        <Input type='text' placeholder='Expiration date (MM/YY)' value={value} className={'input '+styleClass}
        onChangeHandler={changeHandler}  error={error}/> 
    )
}

export default ExpirationDate