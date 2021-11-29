import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './NavBar.module.css'
import {IconButton} from "@material-ui/core";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import TvOutlinedIcon from '@material-ui/icons/TvOutlined';
import MusicVideoOutlinedIcon from '@material-ui/icons/MusicVideoOutlined';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';

export const NavBar: React.FC = () => {

    return <nav className={s.nav}>
        <div className={s.item}>
            <IconButton size={'medium'} style={{padding:"0 5px 0 0"}}>
                <AccountCircleOutlinedIcon style={{fontSize:"1rem"}}/>
            </IconButton>
            {/*<NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink>*/}
            {/*@ts-ignore*/}
            <NavLink to={'/profile'} className={({isActive}) => isActive ? s.active :''}>Profile</NavLink>

        </div>
        <div className={s.item} >
            <IconButton size={'medium'} style={{padding:"0 5px 0 0"}}>
                <MailOutlineOutlinedIcon style={{fontSize:"1rem"}}/>
            </IconButton>
            {/*<NavLink to={'/dialogs'} activeClassName={s.active}>Messages</NavLink>*/}
            <NavLink to={'/dialogs'} className={({isActive}) => isActive ? s.active :''}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <IconButton size={'medium'} style={{padding:"0 5px 0 0"}}>
                <TvOutlinedIcon style={{fontSize:"1rem"}}/>
            </IconButton>
            {/*<NavLink to={'/news'} activeClassName={s.active}>News</NavLink>*/}
            <NavLink to={'/news'}  className={({isActive}) => isActive ? s.active :''}>News</NavLink>
        </div>
        <div className={s.item}>
            <IconButton size={'medium'} style={{padding:"0 5px 0 0"}}>
                <MusicVideoOutlinedIcon style={{fontSize:"1rem"}}/>
            </IconButton>
            {/*<NavLink to={'/music'} activeClassName={s.active}>Music</NavLink>*/}
            <NavLink to={'/music'}  className={({isActive}) => isActive ? s.active :''}>Music</NavLink>
        </div>
        <div className={s.item}>
            <IconButton size={'medium'} style={{padding:"0 5px 0 0"}}>
                <GroupAddOutlinedIcon style={{fontSize:"1rem"}}/>
            </IconButton>
            {/*<NavLink to={'/users'} activeClassName={s.active}>Find User</NavLink>*/}
            <NavLink to={'/users'}  className={({isActive}) => isActive ? s.active :''}>Find User</NavLink>
        </div>
        <div className={s.item}>
            <IconButton size={'medium'} style={{padding:"0 5px 0 0"}}>
                <SettingsApplicationsOutlinedIcon style={{fontSize:"1rem"}}/>
            </IconButton>
            {/*<NavLink to={'/settings'} activeClassName={s.active}>Settings</NavLink>*/}
            <NavLink to={'/settings'}  className={({isActive}) => isActive ? s.active :''}>Settings</NavLink>
        </div>
    </nav>
}
