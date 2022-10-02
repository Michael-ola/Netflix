import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Container,CardsContainer,PlanButtonsContainer,PlanButton,PropertiesWrapper,
    PropertiesContainer,PropertyName,PropertyItem,PropertyItemsContainer,
    DeviceItemsContainer,DeviceItem,DeviceImage,TermsText} from './style/PlanPage.style'
import Card from 'components/checkCard'
import NextPrevButton from 'components/NextPrevButton'
import {useDispatch} from 'react-redux'
import {storePlanInfo} from 'lib/redux-store/Actions/planInfo'
import {planInfoType,devicesType} from './types'

const checkImage=require('assets/images/icons/check.png');
const planInfo=require('data/planInfo.json') as planInfoType;

const PlanPage = () => {
    const dispatch=useDispatch();
    const [selectedPlan,setSelectedPlan]=useState('premium');
    const navigate=useNavigate()
    const setSelectedPlanState=(plan:string)=>{
        setSelectedPlan(plan);
    }
    const [mount,setMount]=useState(false);
    const [unmount,setUnmount] =useState(false);

    useEffect(() => {
        let time:ReturnType<typeof setTimeout>;
        const timerFunc=(callback:()=>void,duration:number)=>{
            time=setTimeout(() => {  
                callback();
            },duration)
        }
        timerFunc(()=>setMount(true),100);
        unmount && timerFunc(()=>navigate('/sign-up/paymentPicker'),250);

        return()=> {
            clearTimeout(time)
        } 
    },[navigate, unmount])

    const buttonClickedHandler =()=>{
        planInfo.plans.forEach((plan)=>{
            if(plan.type===selectedPlan){
                const price=plan.properties['monthly-price'];
                localStorage.setItem('planType',selectedPlan);
                localStorage.setItem('planPrice',price);
                dispatch(storePlanInfo(selectedPlan,price))
                setUnmount(true)
            }
        })
    }
    return (
        <Container {...{mount,unmount}}>
            <div style={{alignSelf:'flex-start'}}>
                <p>STEP <strong>1</strong> OF <strong>3</strong></p>
                <p style={{fontWeight:'bold',fontSize:'1.9rem',color:'#333'}}>Choose the plan that's right for you</p>
                <CardsContainer>
                    <Card image={checkImage} text="Watch all you want. Ad-free."/>
                    <Card image={checkImage} text="Recommendations just for you."/>
                    <Card image={checkImage} text="Change or cancel your plan anytime."/>
                </CardsContainer>
            </div>
            <Plans selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlanState}/>
            <Properties selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlanState}/>
            <TermsText>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities.
                 Not all content is available in all resolutions. See our <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a> for more details
                 <br/>
                 <br/>
                 Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard,
                  and 1 with Basic and Mobile
            </TermsText>
            <NextPrevButton onClick={buttonClickedHandler}>Next</NextPrevButton>
        </Container>
    )
}


const Plans=({selectedPlan,setSelectedPlan}:{selectedPlan:string,setSelectedPlan:(plan:string) =>void})=>{
    const clickHandler=(plan:string) => {
        setSelectedPlan(plan);
    }
    return(
        <PlanButtonsContainer>
            <div>{
                planInfo.plans.map((plan,index)=>{
                    return <PlanButton key={index} {...{selected:selectedPlan===plan.type}} onClick={() =>clickHandler(plan.type)}>{plan.type}</PlanButton>
                })
            }</div>
        </PlanButtonsContainer>
    )
}


const Properties = ({selectedPlan,setSelectedPlan}:{selectedPlan:string,setSelectedPlan:(plan:string)=>void}) => {
    const propertyCategories=planInfo['property-categories'];

    const deviceItemsGenerator=(property:string[][],plan:string) => {

        return(
            property[1].map((device:string,deviceIndex:number)=>{
                const deviceClickHandler=()=>{
                    setSelectedPlan(plan)
                }

                return(
                    <DeviceItem onClick={deviceClickHandler} key={deviceIndex}>
                        <DeviceImage src={require('assets/images/icons/'+planInfo["device-image"][device as devicesType])} {...{selected:plan===selectedPlan}}/>
                        <div>{device}</div>
                    </DeviceItem>
                )
            })
        )
    }
    const  propertiesItemsGenerator=(index:number)=>{
        return(
            planInfo.plans.map((_plan,_index)=>{
                const property=Object.entries(_plan.properties)[index];
                const propertyItemClickHandler=()=>{
                    setSelectedPlan(_plan.type);
                }
                return(
                    property[0].toLowerCase()!=='devices'?
                    <PropertyItem key={_index} onClick={propertyItemClickHandler} {...{selected:_plan.type===selectedPlan}}>{property[1]}</PropertyItem>:
                    <DeviceItemsContainer key={_index} {...{selected:_plan.type===selectedPlan}}>{
                        deviceItemsGenerator(property,_plan.type)
                    }</DeviceItemsContainer>
                )
            })
        )
    }


    return(
        <PropertiesWrapper>{
        planInfo.plans.map((plan,index)=>{
            return (
                <PropertiesContainer key={index}>
                    <PropertyName>{propertyCategories[index]}</PropertyName>
                    <PropertyItemsContainer>{
                        propertiesItemsGenerator(index)
                    }</PropertyItemsContainer>
                </PropertiesContainer>
            )
        })
        }</PropertiesWrapper>
    )
}
export default PlanPage
