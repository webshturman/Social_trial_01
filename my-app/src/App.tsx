import React from 'react'
import './App.css';
import {NavBar} from "./Components/NavBar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {UsersConnector} from "./Components/Users/UsersContainer";
import {ProfileConnector} from "./Components/Profile/ProfileContainer";
import {AuthDataConnector} from "./Components/Header/HeaderContainer";


//------------------------------------------------------------------------------------
export const App = () => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <AuthDataConnector/>
                <NavBar/>
                <div className={'content'}>
                    <Route path={'/dialogs'} render={() => <Dialogs/>}/>
                    <Route path={'/profile/:userId?'} render={() => <ProfileConnector/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/users'} render={() => <UsersConnector/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}



