import {planType} from './actionTypes'

export const storePlanInfo=(planName: string,planPrice:string)=>{
    return{
        type:planType.STORE_PLAN_INFO,
        payload:{
            planName,
            planPrice
        }
    }
}