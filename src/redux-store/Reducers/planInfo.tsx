import {planType} from '../Actions/actionTypes'

interface actionType{
    type: string,
    payload:{planName:string,planPrice:string}
}

const initialState={
    planName: '',
    planPrice:''
}

const savePlanInfo=(state,payload) => {
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