import React from 'react'
import './App.css';
import {NavBar} from "./Components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {AuthDataConnector} from "./Components/Header/HeaderContainer";

import UsersContainer from "./Components/Users/UsersContainer";
import {ProfileConnector} from "./Components/Profile/ProfileContainer";
import {Login} from "./Components/Login/Login";



//------------------------------------------------------------------------------------
export const App = () => {
    return (

        <div className={'app-wrapper'}>
            <AuthDataConnector/>
            <NavBar/>
            <div className={'content'}>
                <Routes>
                    <Route path={'/'} element={<ProfileConnector/>}/>
                    <Route path={'/profile/:userId'} element={<ProfileConnector/>}/>
                    <Route path={'/profile'} element={<ProfileConnector/>}/>
                    <Route path={'/dialogs'} element={<Dialogs/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                    <Route path={'/users'} element={<UsersContainer/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                </Routes>
            </div>
        </div>
    );
}



