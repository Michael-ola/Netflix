import {membershipFormType} from './actionTypes'

export const storeEmail=(email: string) => {
    return{
        type:membershipFormType.STORE_EMAIL_INPUT,
        payload:email
    }
}