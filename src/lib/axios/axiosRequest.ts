import axios, { AxiosResponse } from 'axios'

interface ActionObjectType {
    success:(response:AxiosResponse)=>void,
    failure:(error:any)=>void
}

interface configType{
    params?:string,
    searchString?:string
}

const axiosRequest=(method:string, url:string,data:unknown,actionObject:ActionObjectType, config?:configType)=>{
    const paramsString=config?.params?`/${config.params}`:'';
    const search=config?.searchString?`${config.searchString}`:'';

    switch(method.toLowerCase()){
        case 'post':
            axios.post(url+paramsString+search,data).then(response=>{
                actionObject.success(response);
            }).catch(error=>{
                actionObject.failure(error);
            })
        break;
        case 'get':
            axios.get(url+paramsString).then(response=>{
                actionObject.success(response);
            }).catch(error=>{
                actionObject.failure(error);
            })    
        break;
        default: throw new Error('No valid HTTP METHOD')
    }
}

export default axiosRequest