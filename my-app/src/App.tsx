import React from 'react'
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Users} from "./Components/Users/Users";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {UsersConnector} from "./Components/Users/UsersContainer";

//------------------------------------------------------------------------------------
export const App = () => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'content'}>
                    <Route path={'/dialogs'} render={() => <Dialogs/>}/>
                    <Route path={'/profile'} render={() => <Profile/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/users'} render={() => <UsersConnector/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}



