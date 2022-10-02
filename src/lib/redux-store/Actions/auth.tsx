import {authActionTypes} from './actionTypes'
import {storeEmail} from './membershipForm'
import { storePlanInfo } from './planInfo'
import axiosRequest from 'lib/axios/axiosRequest'

const authStart=()=>{
    return {
        type: authActionTypes.AUTH_START
    }
}

const authSuccess=(data: { idToken: string | null; localId: string | null})=>{
    return {
        type: authActionTypes.AUTH_SUCCESS,
        payload:{
            token: data.idToken,
            userId:data.localId
        }
    }
}

const authFail=(error: string | null)=>{
    return{
        type: authActionTypes.AUTH_FAIL,
        payload:error
    }
}

const firebaseAuth=(dispatch:Function,url:string,data:{email:string,password:string},callback?:() => void)=>{
    const authData={
        email:data.email,
        password:data.password,
        returnSecureToken:true
    }
    
    const success=(response: { data: { idToken: any; expiresIn?: any; localId: any } }) => {
            localStorage.setItem('token',response.data.idToken);
            const date=new Date(new Date().getTime() + response.data.expiresIn*1000);
            localStorage.setItem('expiryDate',date.toString());
            localStorage.setItem('userId',response.data.localId);
            dispatch(authSuccess(response.data));
            dispatch(authLogout(response.data.expiresIn));
            callback?.();
    }

    axiosRequest('post',url,authData,{
        success:success,
        failure:(error) => {
            dispatch(authFail(error.message));
        }
   },{
        searchString:`key=${process.env.REACT_APP_FIREBASE_API_KEY}`
    })
}

export const auth=(email:string, password:string,signUp:boolean,checkBox?:boolean,callback?:() =>void) =>{
    const data={
        email:email,
        password:password
    }
    return async (dispatch: Function)=>{
        dispatch(authStart());
        const url=signUp ?"https://identitytoolkit.googleapis.com/v1/accounts:signUp?":
                        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?";
        await firebaseAuth(dispatch,url,data,callback)
    }
}

export const logout=() => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('planType');
    localStorage.removeItem('email');
    localStorage.removeItem('planPrice');
    return{
        type:authActionTypes.AUTH_LOGOUT
    }
}
const authLogout=(expirationTime: number)=>{
    return (dispatch: (arg0: { type: authActionTypes }) => void)=>{
        setTimeout(()=>{
            dispatch(logout());
        },expirationTime*1000)
    }
}


export const authVerify = ()=>{
    const token=localStorage.getItem('token');
    const userId=localStorage.getItem('userId');
    const planName=localStorage.getItem('planType') as string;
    const planPrice=localStorage.getItem('planPrice') as string;
    const email=localStorage.getItem('email') as string;

    const data={idToken:token,localId:userId};
    const expiryDate=new Date(localStorage.getItem('expiryDate') as unknown as Date);
    
    return (dispatch:Function)=>{
        if(token != null){
            if(new Date().getTime() >= expiryDate.getTime()){
                dispatch(logout());
            }
            else{
                const newExpiryDate=(expiryDate.getTime()-new Date().getTime())/1000;
                dispatch(authSuccess(data));
                dispatch(authLogout(newExpiryDate));
                dispatch(storeEmail(email));
                dispatch(storePlanInfo(planName,planPrice));
            }
        }
        else{
            dispatch(logout());
        }
    }
}
