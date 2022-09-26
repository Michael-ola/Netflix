import React,{useState,useEffect,useCallback} from 'react'
import {StyledNav,NavbarLink,
    NavLinksContainer,NavControls,NavLogo,Mode,BrowseButton,
    BrowseCaret,NotificationsContainer,Notification,
    NotificationIcon, UsersTab,UsersContainer,NavIcons,
    User,UserAvatar,Caret,ManageProfiles,Account,HelpCenter,StyledSignOut
} from './styles/Navbar'

import SearchComponent from 'features/Search/components/SearchBox';
import {useNavigate,NavLink} from 'react-router-dom'
import userType from 'types/usersDataType'
import {notificationType}  from 'types/notificationsDataType'
import useMoviesPageData from 'features/moviesPage/hooks/useMoviesPageData'
import {useSelector} from 'react-redux'
import { stateType } from 'lib/redux-store/types';
import { getUserData } from 'services/firebase/getUsersData';
import {getNotificationsData} from 'services/firebase/getNotificationsData';

const NetflixLogo=require('assets/images/icons/logo.png')
const bellIcon=require('assets/images/icons/bell.png');
const pencilIcon=require('assets/images/icons/pencil.png');
const helpIcon=require('assets/images/icons/help.png');
const accountIcon=require('assets/images/icons/account.png');

interface StateObjType{
    showNavLinks:boolean;
    showNotifications:boolean;
    showUsers:boolean
}
type objTypeKeys='showNavLinks' | 'showNotifications' | 'showUsers';

interface NavTabType{
    showState:StateObjType;
    showHandler:(stateObj:StateObjType) => void;
    changeNavTab:(currentTab:string) =>boolean
}

const Navbar = () => {
    const [changeBackground,setChangeBackground]=useState(false)
    const  moviesPageData=useMoviesPageData()

    const [showState,setShowState]=useState({
        showNavLinks:false,
        showNotifications:false,
        showUsers:false
    })

    useEffect(() =>{
        window.addEventListener('scroll',windowScrollHandler,true)
        return ()=>{
            window.removeEventListener('scroll',windowScrollHandler,true)
        }
    },[])

    const windowScrollHandler=()=>{
        window.scrollY>=20 ? setChangeBackground(true) : setChangeBackground(false)
    }

    const showHandler = useCallback((stateObj:StateObjType) => {
        setShowState(() => ({//@ts-ignore
            showNavLinks:false,//@ts-ignore
            showNotifications:false, //@ts-ignore
            showUsers:false,
            ...stateObj
           })
        )
    },[])

    const changeNavTab=useCallback((currentTab:string):boolean=>{
        for(let value in showState){
            if(showState[value as objTypeKeys]===true && value!==currentTab){
                return true
            } 
        }
        return false
    },[showState])
    
    return (
        <StyledNav {...{changeBackground,searchText:moviesPageData.isSearchText}}>
            <NavLogo src={NetflixLogo}/>
            <BrowseButton onMouseEnter={()=>showHandler({showNavLinks:true} as StateObjType)}
                onMouseLeave={()=>showHandler({showNavLinks:false} as StateObjType)}
            ><span>Browse</span><BrowseCaret/></BrowseButton>


           
            {changeNavTab('showNavLinks') && window.innerWidth<=885?null:
               <NavLinksContainer {...showState} onMouseEnter={()=>showHandler({showNavLinks:true} as StateObjType)}
               onMouseLeave={()=>showHandler({showNavLinks:false} as StateObjType)}>
                   <NavbarLink><NavLink to='/browse' style={({isActive})=>isActive ? {fontWeight:'bold'}:{}}>Home</NavLink></NavbarLink>
                   <NavbarLink><NavLink to=''>TV Shows</NavLink></NavbarLink>
                   <NavbarLink><NavLink to=''>Movies</NavLink></NavbarLink>
                   <NavbarLink><NavLink to=''>{'New & Popular'}</NavLink></NavbarLink>
                   <NavbarLink><NavLink to=''>My List</NavLink></NavbarLink>
                   <NavbarLink><NavLink to=''>{'Audio & Subtitles'}</NavLink></NavbarLink>
               </NavLinksContainer>
            }
            <NavControls>
                <SearchComponent/>
                <Mode><span>kids</span></Mode>
                <Notifications showState={showState} showHandler={showHandler} changeNavTab={changeNavTab}/>
                <Users showState={showState}  showHandler={showHandler}  changeNavTab={changeNavTab}/>
            </NavControls>
        </StyledNav>
    )
}

const Notifications = ({showState,showHandler,changeNavTab}:NavTabType) => {
    const [notificationsList,setNotificationList]=useState<notificationType[]>([])
    const userId=useSelector((state:stateType)=>{
        return state.auth.userId
    })

    const notifications=useCallback(async ()=>{
        setNotificationList(await getNotificationsData(userId as string) as notificationType[])
    },[userId])

    useEffect(() => {
        notifications()
    },[notifications])

    const mouseEnterHandler = () => {
        showHandler({showNotifications:true} as StateObjType)
    }

    const mouseLeaveHandler = () => {
        showHandler({showNotifications:false} as StateObjType)
    }
    
    return(
        <div style={{display:'flex',position:'relative',flexDirection: 'column',overflow:'visible'}}>
            <NotificationIcon src={bellIcon} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}/>
            {changeNavTab('showNotifications')? null:
            <NotificationsContainer {...showState} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>{
                notificationsList?.length>0?
                    notificationsList.map((notification,index) =><Notification key={index}>{notification.title}</Notification>)
                :
                <Notification>No notifications</Notification>
            }</NotificationsContainer>}
        </div>
    )
}

const Users= ({showState,showHandler,changeNavTab}:NavTabType) => {
    const navigate=useNavigate();
    const [usersList,setUsersList]=useState<userType[]>([])
    const userId=useSelector((state:stateType)=>{
        return state.auth.userId
    })
    
    const users=useCallback(async ()=>{
        setUsersList(await getUserData(userId as string) as userType[])
    },[userId])

    useEffect(() => {
        users()
    },[users])

    const mouseEnterHandler = () => {
        showHandler({showUsers:true} as StateObjType)
    }

    const mouseLeaveHandler = () => {
        showHandler({showUsers:false} as StateObjType)
    }

    const signOutHandler = () => {
        navigate('/sign-out')
    }
    
    return(
        <div style={{display:'flex',position:'relative',flexDirection: 'column',overflow:'visible'}}>
            <UsersTab onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                <UserAvatar src={usersList[0]?.avatar ?require(`assets/images/users/${usersList[0].avatar}`):''}/>
                <Caret style={{}} {...showState}/>
            </UsersTab >
            {changeNavTab('showUsers')? null:
            <UsersContainer {...showState} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
              {
                usersList.length>0?
                    usersList.map((user) =>
                    <User key={user.id}>
                        <UserAvatar src={require(`assets/images/users/${user.avatar}`)}/>
                        <span>{user.username.length>15 ? user.username.slice(0,15)+'...': user.username}</span>
                    </User>)
                :<User>No Users</User>
              }
                <ManageProfiles><span><NavIcons src={pencilIcon} alt="ManageProfiles"/>Manage Profiles</span></ManageProfiles>
                <Mode {...{users:true}}><span>kids</span></Mode>
                <Account><span><NavIcons src={accountIcon} alt="Account"/>Account</span></Account>
                <HelpCenter><a  href="https://help.netflix.com/"><NavIcons src={helpIcon} alt="help"/>Help Center</a></HelpCenter>
                <StyledSignOut onClick={signOutHandler}><span>Sign out of Netflix</span></StyledSignOut>
            </UsersContainer>}
        </div>
    )
}

export default Navbar