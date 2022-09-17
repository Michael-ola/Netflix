export interface propertyType{
    'monthly-price':string,
    'video-quality':string,
    resolution: string,
    devices: string[]
}

export type devicesType='phone' | 'tablet' | 'computer' | 'tv'

export interface planInfoType{
    'property-categories': string[],
    'device-image':{
        phone:string,
        tablet:string,
        computer:string,
        tv:string
    },
    plans:[
        {
            type: string,
            properties:propertyType
        }
    ]
}