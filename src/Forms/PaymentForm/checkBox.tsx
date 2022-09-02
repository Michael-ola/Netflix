import React from 'react'
import useFormContext from '../../customHooks/useFormContext'
import CheckboxInput from '../../containers/CheckBox'

export default function CheckBox(){
    const formData=useFormContext();
    const submitButtonClicked=formData.submitButtonClicked as boolean;
    const setFormData=formData.setFormData as Function;
    const errorMessage='You must acknowledge that you have read and agree to the Terms of Use to continue.'

    return(
        <CheckboxInput required label='I agree' submitButtonClicked={submitButtonClicked} errorMessage={errorMessage}
        setFormData={setFormData}
        />
    )
}

