import React from 'react'
import useFormContext from 'customHooks/useFormContext'
import CheckboxInput from 'containers/CheckBox'

const Checkbox=()=>{
    const formData=useFormContext();
    const submitButtonClicked=formData?.submitButtonClicked as boolean;
    const setFormData=formData?.setFormData as Function;
    const labelText='Please do not email me Netflix special offers'
    const errorMessage='You must acknowledge that you have read and agree to the Terms of Use to continue.'

    return(
        <CheckboxInput label={labelText} submitButtonClicked={submitButtonClicked} errorMessage={errorMessage}
        setFormData={setFormData}
        />
    )
}

export default Checkbox