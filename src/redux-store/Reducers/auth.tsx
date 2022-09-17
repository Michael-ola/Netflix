import {authActionTypes} from '../Actions/actionTypes'
import  {authDataType} from '../types'

interface actionType{
    type: string,
    payload:authDataType
}

const initialState={
    loading:false,
    token:null,
    userId:null,
    error:null
}

const authStartHandler=(state:authDataType) => {
    return{
        ...state,
        loading:true,
        token:null,
        userId:null,
        error:null
    }
}

const authSuccessHandler=(state:authDataType,token:string | null,userId:string | null) => {
    return{
        ...state,
        loading:false,
        token:token,
        userId:userId,
        error:null
    }
}

const  authFailHandler=(state:authDataType,error:string | null) => {
    return{
        ...state,
        error:error,
        token:null,
        userId:null,
        loading:false
    }
}

const authLogoutHandler=(state:authDataType)=>{
    return{
        ...state,
        token:null,
        userId:null
    }
}

const authReducer=(state=initialState,action:actionType)=>{
    switch(action.type){
        case authActionTypes.AUTH_START:
            return authStartHandler(state);
        case authActionTypes.AUTH_SUCCESS:
            return authSuccessHandler(state,action.payload.token,action.payload.userId);
        case authActionTypes.AUTH_FAIL:
            return authFailHandler(state,action.payload.error);
        case authActionTypes.AUTH_LOGOUT:
            return authLogoutHandler(state);
        default:
            return state
    }
}

export default authReducer;