import React, {useEffect} from 'react'
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
import CircularProgress from '@material-ui/core/CircularProgress';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Components/redux/store";
import {toBeAuthorized} from "./Components/redux/auth-reducer";



//------------------------------------------------------------------------------------
export const App = () => {
    const isInitialized = useSelector<AppRootStateType , boolean>(state=> state.loader.isInitialized)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(toBeAuthorized())
        console.log('request')
    },[])
    // if (!isInitialized) {
    //     return <div
    //         style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
    //         <CircularProgress/>
    //     </div>
    // }
    return (
        <div className={'app-wrapper'}>
            <AuthDataConnector/>
            <NavBar/>
            <div className={'content'}>
                <Routes>
                    <Route path={'/'} element={<ProfileConnector />}/>
                    <Route path={'/profile/:userId'} element={<ProfileConnector />}/>
                    <Route path={'/profile'} element={<ProfileConnector />}/>
                    <Route path={'/dialogs'} element={<Dialogs />}/>
                    <Route path={'/news'} element={<News />}/>
                    <Route path={'/music'} element={<Music />}/>
                    <Route path={'/settings'} element={<Settings />}/>
                    <Route path={'/users'} element={<UsersContainer />}/>
                    <Route path={'/login'} element={<Login />}/>
                    <Route path={'/Social_trial_01'} element={<ProfileConnector />}/>
                </Routes>
            </div>
        </div>
    );
}



