import axios from 'axios'
import {authActionTypes} from './actionTypes'


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

const firebaseAuth=(dispatch:Function,url:string,data:{email:string,password:string})=>{
    const authData={
        email:data.email,
        password:data.password,
        returnSecureToken:true
     }
    
    axios.post(url+'key=AIzaSyDSsWg2h4b5aFqSLbtlcp6bnc7e22D1fj4',authData)
    .then((response) => {
        console.log(response);
        localStorage.setItem('token',response.data.idToken);
        const date=new Date(new Date().getTime() + response.data.expiresIn*1000);
        localStorage.setItem('expiryDate',date.toString());
        localStorage.setItem('userId',response.data.localId);
        dispatch(authSuccess(response.data));
        dispatch(authLogout(response.data.expiresIn))
    }).catch((error) => {
        console.log(error.message);
        dispatch(authFail(error.message));
    })
}

export const auth=(email:string, password:string,signUp:boolean,checkBox?:boolean) =>{
    const data={
        email:email,
        password:password
    }
    return async (dispatch: Function)=>{
        dispatch(authStart());
        const url=signUp ?"https://identitytoolkit.googleapis.com/v1/accounts:signUp?":
                        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?";
        await firebaseAuth(dispatch,url,data)
    }
}

export const logout=() => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expiryDate');
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
    const data={idToken:token,localId:userId};
    const expiryDate=new Date(localStorage.getItem('expiryDate') as unknown as Date);
    console.log('dispatching');
    return (dispatch:Function)=>{
        if(token != null){
            if(new Date().getTime() >= expiryDate.getTime()){
                dispatch(logout());
            }
            else{
                const newExpiryDate=(expiryDate.getTime()-new Date().getTime())/1000;
                dispatch(authSuccess(data));
                dispatch(authLogout(newExpiryDate));
            }
        }
        else{
            dispatch(logout());
        }
    }
}