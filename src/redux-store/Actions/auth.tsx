import axios from 'axios'
import {authActionTypes} from './actionTypes'

const authStart=()=>{
    return {
        type: authActionTypes.AUTH_START
    }
}

const authSuccess=(data)=>{
    return {
        type: authActionTypes.AUTH_SUCCESS,
        payload:{
            token: data.idToken,
            userId:data.localId
        }
    }
}

const authFail=(error)=>{
    return{
        type: authActionTypes.AUTH_FAIL,
        payload:error
    }
}


const firebaseSignUp=(dispatch:Function,data:{email:string,password:string})=>{
    const authData={
        email:data.email,
        password:data.password,
        returnSecureToken:true
     }
    
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDSsWg2h4b5aFqSLbtlcp6bnc7e22D1fj4',authData)
    .then((response) => {
        console.log(response)
        dispatch(authSuccess(response.data))
    }).catch((error) => {
        console.log(error);
        dispatch(authFail(error))
    })
}

const firebaseSignIn=(dispatch:Function,data:{email:string,password:string})=>{
    const authData={
        email:data.email,
        password:data.password,
        returnSecureToken:true
     }
    
    axios.post('?key=AIzaSyDSsWg2h4b5aFqSLbtlcp6bnc7e22D1fj4',authData)
    .then((response) => {
        console.log(response)
        dispatch(authSuccess(response.data))
    }).catch((error) => {
        console.log(error);
        dispatch(authFail(error))
    })
}

export const auth=(email:string, password:string,signUp:boolean,checkBox?:boolean) =>{
    const data={
        email:email,
        password:password
    }
    return async dispatch=>{
        dispatch(authStart());
        signUp ?await firebaseSignUp(dispatch,data):await firebaseSignIn(dispatch,data);
    }
}