export interface planInfoType{
    planName:string,
    planPrice:string
}

export interface emailType{
    email: string;
}
export interface authDataType{
    loading:boolean,
    token:string | null,
    userId:string | null,
    error:string | null
}

export interface stateType{
    emailStore: emailType,
    planInfo: planInfoType,
    auth:authDataType
}