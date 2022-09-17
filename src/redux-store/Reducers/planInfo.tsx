import {planType} from '../Actions/actionTypes'
import {planInfoType} from '../types'

interface actionType{
    type: string,
    payload:planInfoType
}

const initialState={
    planName: '',
    planPrice:''
}

const savePlanInfo=(state:planInfoType,payload:planInfoType):planInfoType => {
        return {
            ...state,
            planName:payload.planName,
            planPrice:payload.planPrice
        }
}

export default function storePlanInfo(state=initialState,action:actionType){
    switch(action.type){
        case planType.STORE_PLAN_INFO:
            return savePlanInfo(state,action.payload)
        default:
            return state
    }
}