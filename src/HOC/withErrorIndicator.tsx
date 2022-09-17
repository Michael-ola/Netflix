import { AxiosRequestConfig,AxiosResponse, AxiosStatic } from 'axios';
import React,{useState,useEffect} from 'react';
import styled from 'styled-components/macro'

const withErrorIndicator=(Component:React.FC,axios?:AxiosStatic)=>{
   return ()=>{
       const [error,setError]=useState<string | null>(null);
        useEffect(()=>{
            axios?.interceptors.request.use((req:AxiosRequestConfig):AxiosRequestConfig=>{
                return req;
            },(error)=>{
                setError(error);
            })
            axios?.interceptors.response.use((res:AxiosResponse):AxiosResponse=>{
                return res;
            },(error)=>{
                setError(error);
            })
        },[])

        return(
            <div>
                {error &&<Error>You are not connected to the internet.</Error>}
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