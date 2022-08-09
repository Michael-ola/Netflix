import styled from 'styled-components/macro'
import caret from '../../../assets/images/icons/carettt.png'

import {Logo} from '../../../GlobalStyle'
export const StyledNav=styled.div`
position:fixed;
z-index:5;
width:100%;
display:flex;
align-items:center;
overflow:hidden;
background:${({changeBackground})=>changeBackground?'rgb(20, 20, 20)':
 ''};
color:#e5e5e5;
transition: all 0.4s ease;
&::before{
    content:'';
    display:block;
    height:100%;
    width:100%;
    position:absolute;
    z-index:-1;
    top:0;
    left:0;
    background:linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
}

@media only screen and (max-width:950px){
    padding:0.3em;
}
@media only screen and (max-width:885px){
    justify-content: flex-end;
}
`
const userListStyle=`
list-style-type: none;
display:flex;
align-items: center;
color:#fcf8f4;
padding:0.5em 0;
font-size:0.8em;
font-weight:500;
width:100%;
& span{
    padding-left: 0.7em;
    white-space:nowrap;
}
& span:hover{
    text-decoration: underline;
}
`

export const NavLogo=styled(Logo)`
@media only screen and (max-width:885px){
    position:absolute;
    margin:auto;
    top:0;
    bottom:0;
    left:0;
}
@media only screen and (max-width:400px){
    margin:0;
}
`
export const BrowseButton=styled.div`
position:absolute;
margin:auto 0;
top:0;
bottom:0;
left:7em;
color:#fff;
height:100%;
font-size:clamp(0.5rem,1.6vw,1rem);
margin-left:7px;
display:none;

@media only screen and (max-width:885px){
    display:flex;
    align-items:center;
}
`

export const NavbarLink=styled.li`
list-style-type: none;
margin: 0 2em 0 0;
font-size:clamp(0.4rem,1vw,0.9rem);
overflow:visible;
&:hover{
    color:#B3B3B3;
}
transition:color 0.6s ease;

@media only screen and (max-width:885px){
    padding:1em 4.5em;
    text-align:center;
    margin:0;
    font-size:0.7em;
    width:100%;
    &:hover{
        color:inherit;
        background:rgba(255,255,255,0.05);
    }
}
`
export const Mode=styled.li`
list-style-type: none;
margin: 0 1em 0 0;
font-size:0.9em;
overflow:visible;
${({users})=>users?`display:none`:`display:flex`};
@media only screen and (max-width:1100px){
    ${userListStyle}
    ${({users})=>users?`display:flex`:`display:none`};
    border-top:1px solid rgba(255,255,255,0.3);
    padding:1em 0;
}
`


export const NavLinksContainer=styled.ul`
display:flex;
margin-left: 25px;

@media only screen and (max-width:885px){
    visibility:${({showNavLinks})=>showNavLinks?'visible':'hidden'};
    position:fixed;
    z-index:3;
    top:60px;
    left:4%;
    margin-left:0;
    flex-direction: column;
    align-items: center;
    background:rgba(0,0,0,0.9);
    border:1px solid rgba(255,255,255,0.2);
    border-top:3px solid #e5e5e5;
    transition:visibility 0.5s linear;
    &::before{
        content:'';
        display:block;
        width:0px;
        position:fixed;
        top:45px;
        height:0px;
        border:8px solid transparent;
        border-bottom-color:#e5e5e5;
    }
}
`

export const NavControls=styled.div`
position:absolute;
right:0;
margin:auto 0;
top:0;
bottom:0;
height:100%;
align-self:flex-end;
display:flex;
align-items:center;
justify-content:space-between;
@media only screen and (max-width:885px){
    position:relative;
}
`
export const NotificationsContainer=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
padding:1em 0;
position:fixed;
width:400px;
min-height:100px;
border:1px solid rgba(255,255,255,0.2);
border-top:3px solid #e5e5e5;
top:73px;
right:97px;
z-index:2;
visibility:hidden;
background:rgba(0,0,0,0.8);
${({showNotifications})=>showNotifications? `
visibility:visible;
`:`
visibility:hidden;
`}
transition:visibility 0.5s linear;

&:hover {
    background:#000;
};
&::before{
    content:'';
    display:block;
    width:0px;
    position:fixed;
    top:56.5px;
    right:109px;
    height:0px;
    border:8px solid transparent;
    border-bottom-color:#e5e5e5;
    @media only screen and (max-width:950px){
        right:75px;
        top:28.5px;
    }
}
@media only screen and (max-width:950px){
    right:57px;
    top:45px;
}
`

export const Notification=styled.div`
color:#fff;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
`
export const NotificationIcon=styled.img`
width:32px;
height:24px;
filter:brightness(0) invert(1);
color:#fff;
`

export const UsersTab=styled.div`
display:flex;
margin-right:clamp(0.3em,2vw,3em);
`
export const UsersContainer=styled.ul`
position:fixed;
z-index:3;
top:77px;
right:clamp(1em,5vw,3em);
width:180px;
padding-top:1em;
display:flex;
flex-direction:column;
background:rgba(0,0,0,0.93);
visibility:hidden;
${({showUsers})=>showUsers? `
visibility:visible;
`:`
visibility:hidden;
`}
transition:visibility 0.5s linear;
&::before{
    content:'';
    display:block;
    width:0px;
    position:fixed;
    top:59px;
    right:clamp(1.5em,5vw,3.5em);
    height:0px;
    border:8px solid transparent;
    border-bottom-color:#e5e5e5;
    @media only screen and (max-width:950px){
        top:43px;
        right:clamp(1em,4vw,2.4em);
    }
}
@media only screen and (max-width:950px){
top:60px;
right:clamp(0.6em,3vw,2em);
}
`

export const User=styled.li`
${userListStyle};
`
export const UserAvatar=styled.img`
width:35px;
height:35px;
margin-left:1em;
margin-right:0.3em;
border-radius:3px;

@media only screen and (max-width:950px){
    height:32px;
    width:30px;
}
`
export const Caret=styled.img.attrs({
    src:caret
})`
align-self:center;
width:18px;
height:18px;
filter:brightness(0) invert(1);
transform:rotate(0);
${({showUsers})=>showUsers && `
transform:rotate(180deg);
`}
transition: all 0.6s ease;

@media only screen and (max-width:950px){
    display:none;
}
`

export const ManageProfiles=styled.li`
${userListStyle};
`
export const Account=styled.li`
${userListStyle};
border-top:1px solid rgba(255,255,255,0.3);
padding-bottom:0.2em;
`
export const HelpCenter=styled.li`
${userListStyle};
padding-top:0.2em;
`
export const StyledSignOut=styled.li`
${userListStyle};
border-top:1px solid rgba(255,255,255,0.3);
align-self:center;
padding:1em 0;
& span{
    padding:0;
    display:block;
    width:100%;
    text-align:center;
}
`
export const BrowseCaret=styled.img.attrs({
    src:caret
})`
align-self:center;
width:16px;
height:16px;
display:block;
filter:brightness(0) invert(1);
`
