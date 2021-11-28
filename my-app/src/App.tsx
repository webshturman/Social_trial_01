import React from 'react'
import './App.css';
import {NavBar} from "./Components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {UsersConnector} from "./Components/Users/UsersContainer";
import {ProfileConnector} from "./Components/Profile/ProfileContainer";
import {AuthDataConnector} from "./Components/Header/HeaderContainer";
import {Login} from "./Components/Login/Login";


//------------------------------------------------------------------------------------
export const App = () => {
    return (

        <div className={'app-wrapper'}>
            <AuthDataConnector/>
            <NavBar/>
            <div className={'content'}>
                <Routes>
                    <Route path={'/dialogs'} element={<Dialogs/>}/>
                    <Route path={'/profile/:userId?'} element={<ProfileConnector/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                    <Route path={'/users'} element={<UsersConnector/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                </Routes>
            </div>
        </div>
    );
}



