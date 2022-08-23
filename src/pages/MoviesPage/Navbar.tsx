import React,{useState,useEffect,useCallback} from 'react'

import {StyledNav,NavbarLink,
    NavLinksContainer,NavControls,NavLogo,Mode,BrowseButton,
    BrowseCaret,NotificationsContainer,Notification,
    NotificationIcon, UsersTab,UsersContainer,
    User,UserAvatar,Caret,ManageProfiles,Account,HelpCenter,StyledSignOut
} from './styles/Navbar'
import SearchComponent from '../../containers/Search/Search';


const list=require('../../data/faqs.json');
const bellIcon=require('../../assets/images/icons/bell.png');
const users=require('../../data/users.json');

interface StateObjType{
    showNavLinks:boolean;
    showNotifications:boolean;
    showUsers:boolean
}

interface NavTabType{
showState:StateObjType;
showHandler:(stateObj:object) => void;
changeNavTab:(currentTab:string) =>boolean
}

const Navbar = () => {
    const [changeBackground,setChangeBackground]=useState(false)
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

    const showHandler = useCallback((stateObj:object) => {
        setShowState((currentState) => ({
            showNavLinks:false,
            showNotifications:false,
            showUsers:false,
            ...stateObj
           })
        )
    },[])

    const changeNavTab=useCallback((currentTab:string)=>{
        for(let value in showState){
            if(showState[value]===true && value!==currentTab){
                return true
            } 
        }
    },[showState])
    
    return (
        <StyledNav {...{changeBackground}}>
            <NavLogo src="https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png"/>
            <BrowseButton onMouseEnter={()=>showHandler({showNavLinks:true})}
                onMouseLeave={()=>showHandler({showNavLinks:false})}
            ><span>Browse</span><BrowseCaret/></BrowseButton>
           
            {changeNavTab('showNavLinks') && window.innerWidth<=885?null:
               <NavLinksContainer {...showState} onMouseEnter={()=>showHandler({showNavLinks:true})}
               onMouseLeave={()=>showHandler({showNavLinks:false})}>
                   <NavbarLink>Home</NavbarLink>
                   <NavbarLink>TV Shows</NavbarLink>
                   <NavbarLink>Movies</NavbarLink>
                   <NavbarLink>{'New & Popular'}</NavbarLink>
                   <NavbarLink>My List</NavbarLink>
                   <NavbarLink>{'Audio & Subtitles'}</NavbarLink>
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
    const [notificationsList,setNotificationList]=useState([])

    useEffect(() => {
        //make API request
        setNotificationList(list)
    },[])

    const mouseEnterHandler = () => {
        showHandler({showNotifications:true})
    }

    const mouseLeaveHandler = () => {
        showHandler({showNotifications:false})
    }
    
    return(
        <>
            <NotificationIcon src={bellIcon} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}/>
            {changeNavTab('showNotifications')? null:
            <NotificationsContainer {...showState} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>{
                notificationsList.length>0?
                    notificationsList.map((notification,index) =><Notification key={notification.id}>{notification.header}</Notification>)
                :<Notification>No notifications</Notification>
            }</NotificationsContainer>}
        </>
    )
}

const Users= ({showState,showHandler,changeNavTab}:NavTabType) => {
    const [usersList,setUsersList]=useState([])

    useEffect(() => {
        //make API request
        setUsersList(users)
    },[])

    const mouseEnterHandler = () => {
        showHandler({showUsers:true})
    }

    const mouseLeaveHandler = () => {
        showHandler({showUsers:false})
    }
    
    return(
        <>
            <UsersTab onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                <UserAvatar src={usersList[0]?.avatar}/>
                <Caret style={{}} {...showState}/>
            </UsersTab >
            {changeNavTab('showUsers')? null:
            <UsersContainer {...showState} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
              {
                usersList.length>0?
                    usersList.map((user) =>
                    <User key={user.userId}>
                        <UserAvatar src={user.avatar}/>
                        <span>{user.username.length>15 ? user.username.slice(0,15)+'...': user.username}</span>
                    </User>)
                :<User>No Users</User>
              }
                <ManageProfiles><span>Manage Profiles</span></ManageProfiles>
                <Mode {...{users:true}}><span>kids</span></Mode>
                <Account><span>Account</span></Account>
                <HelpCenter><span>Help Center</span></HelpCenter>
                <StyledSignOut><span>Sign out of Netflix</span></StyledSignOut>
            </UsersContainer>}
        </>
    )
}

export default Navbar