import { AxiosRequestConfig,AxiosResponse, AxiosStatic } from 'axios';
import React,{useState,useEffect} from 'react';
import styled from 'styled-components/macro'

const withErrorIndicator=(Component:React.FC,axios?:AxiosStatic)=>{
   return ()=>{
       const [error,setError]=useState('');
        useEffect(()=>{
            const myInterceptorReq=axios?.interceptors.request.use((req:AxiosRequestConfig):AxiosRequestConfig=>{
                return req;
            },(error)=>{
                setError(error.message);
            })
            const myInterceptorRes=axios?.interceptors.response.use((res:AxiosResponse):AxiosResponse=>{
                return res;
            },(error)=>{
                setError(error.message);
            })
            return()=>{
                axios?.interceptors.request.eject(myInterceptorReq as number)
                axios?.interceptors.response.eject(myInterceptorRes as number)
            }
        },[])  

        return(
            <div>
                {error? error.toLocaleLowerCase()==='network error'? <Error>Network Error</Error>:<Error>something went wrong</Error>:<></>}
                <Component/>
            </div>
        )
    }
}

const Error=styled.div`
position:fixed;
width:30%;
z-index:18;
margin:auto;
top:10%;
left:0;
right:0;
background:orange;
color:#fff;
font-weight:bold;
text-align:center;
padding:0.5em 0.8em;
&::before{
    content:"\\e743";
    color:#fff;
    margin-right:3px;
    display:inline-block;
}
`


export default withErrorIndicator