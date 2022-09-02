import {authActionTypes} from '../Actions/actionTypes'

const initialState={
    loading:false,
    token:null,
    userId:null,
    error:null
}

const authStartHandler=(state) => {
    return{
        ...state,
        loading:true,
        token:null,
        userId:null,
        error:null
    }
}

const authSuccessHandler=(state,token,userId) => {
    return{
        ...state,
        loading:false,
        token:token,
        userId:userId,
        error:null
    }
}

const  authFailHandler=(state,error) => {
    return{
        ...state,
        error:error,
        token:null,
        userId:null,
        loading:false
    }
}

const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case authActionTypes.AUTH_START:
            return authStartHandler(state);
        case authActionTypes.AUTH_SUCCESS:
            return authSuccessHandler(state,action.payload.token,action.payload.userId);
        case authActionTypes.AUTH_FAIL:
            return authFailHandler(state,action.payload.error);
        default:
            return state
    }
}

export default authReducer;