import React from 'react'
import styled from 'styled-components/macro'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import  {stateType} from 'lib/redux-store/types'

const PlanInfo = () => {
    const navigate=useNavigate();
    const planInfo=useSelector((state:stateType)=>state.planInfo);
    const changePlanClicked=() => {
        navigate('/sign-up/planform')
    }
    return (
        <PlanInfoContainer>
            <PlanContainer>
                <PlanSchedule>{planInfo.planPrice+'/month'}</PlanSchedule>
                <PlanType>{planInfo.planName}</PlanType>
            </PlanContainer>
            <ChangePlan  onClick={changePlanClicked}>Change</ChangePlan>
        </PlanInfoContainer>
    )
}


const PlanInfoContainer=styled.div`
display:flex;
align-items: center;
width:100%;
background:#f4f4f4;
border-top: 1px solid #e6e6e6;
border-radius:5px;
padding:1.2em 1em;
margin-bottom:2em;
margin-top:1em;
`
const PlanContainer =styled.div`
display:flex;
flex-direction:column;
`

const PlanSchedule =styled.p`
font-weight:900;
color:#333;
`
const PlanType =styled.p`
color:#737373;
`
const ChangePlan=styled.span`
margin-left:auto;
color:#0071eb;
font-weight:bold;
font-size:1.1rem;
user-select: none;
&:hover{
    text-decoration:underline;
}
`

export default PlanInfo
