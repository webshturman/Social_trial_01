import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './NavBar.module.css'
import {IconButton} from "@material-ui/core";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import TvOutlinedIcon from '@material-ui/icons/TvOutlined';
import MusicVideoOutlinedIcon from '@material-ui/icons/MusicVideoOutlined';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';

export const NavBar: React.FC = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <IconButton size={'medium'} style={{padding:"0 5px 0 0"}}>
                <AccountCircleOutlinedIcon style={{fontSize:"1rem"}}/>
            </IconButton>
            <NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item} >
            <IconButton size={'medium'} style={{padding:"0 5px 0 0"}}>
                <MailOutlineOutlinedIcon style={{fontSize:"1rem"}}/>
            </IconButton>
            <NavLink to={'/dialogs'} activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <IconButton size={'medium'} style={{padding:"0 5px 0 0"}}>
                <TvOutlinedIcon style={{fontSize:"1rem"}}/>
            </IconButton>
            <NavLink to={'/news'} activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
            <IconButton size={'medium'} style={{padding:"0 5px 0 0"}}>
                <MusicVideoOutlinedIcon style={{fontSize:"1rem"}}/>
            </IconButton>
            <NavLink to={'/musik'} activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
            <IconButton size={'medium'} style={{padding:"0 5px 0 0"}}>
                <SettingsApplicationsOutlinedIcon style={{fontSize:"1rem"}}/>
            </IconButton>
            <NavLink to={'/settings'} activeClassName={s.active}>Settings</NavLink>
        </div>
    </nav>
}