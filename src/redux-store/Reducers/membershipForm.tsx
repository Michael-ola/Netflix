import {membershipFormType} from '../Actions/actionTypes'

interface ActionTypes {
    type:string,
    payload:string
}

const initialState={
    email:''
}


const  saveEmail=(state:{email:string},email:string) => {
    return{
        ...state,
        email:email
    }
}

const storeEmail=(state=initialState,action:ActionTypes) => {
    switch (action.type){
        case membershipFormType.STORE_EMAIL_INPUT:
            return saveEmail(state,action.payload);
        default:
            return state
    }
}

export default storeEmail;