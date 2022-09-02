import {membershipFormType} from './actionTypes'

export const storeEmail=(email) => {
    return{
        type:membershipFormType.STORE_EMAIL_INPUT,
        payload:email
    }
}