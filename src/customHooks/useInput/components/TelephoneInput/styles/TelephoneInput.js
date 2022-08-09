import styled from 'styled-components/macro'
import PhoneInput  from 'react-phone-number-input/react-hook-form'

export const StyledTelephoneInput=styled(PhoneInput)`
    position:absolute;
    z-index:3;
    height:100%;
    width:100%;
    display:flex;
    flex-direction:row-reverse;
    background:inherit;
    .PhoneInputInput{
        height:100%;
        border:none;
        outline:none;
        padding:14px 0 0 15px;
        background:inherit;
        color:inherit;
    };
    .PhoneInputCountrySelect{
        background:inherit;
        width:100%;
        height:100%;
    };
    .PhoneInputCountrySelect option{
        color:#fff;
        background:#525252;
    };
    .PhoneInputCountrySelect option:hover{
        background:#737373;
    };
    .PhoneInputCountry{
        width:20%;
        display:flex;
        justify-content:center;
        position:absolute;
        top:0;
        height:100%;
        background:inherit;
        margin:0;
        ${({number:numberInput})=>numberInput==='true'?'': 'display:none'}
    };
    .PhoneInputCountrySelectArrow{
        display:flex;
        justify-content:center;
        align-items:center;
        width:30%;
        height:50%;
        background-image:url("https://img.icons8.com/material/24/undefined/sort-down--v2.png");
        filter:brightness(0) invert(1);
        background-repeat:no-repeat;
        background-size:cover;
        transform:rotate(0);
        border:none;
        overflow:visible;
    };
    .PhoneInputCountryIcon{

    }
`