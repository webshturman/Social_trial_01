import React from 'react'
import  './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./News/News";
import {Musik} from "./Musik/Musik";
import {Settings} from "./Settings/Settings";
import state from "./Components/redux/state";


//------------------------------------------------------------------------------------
export const App = () => {
    debugger
    const dialogsBlock = ()=> <Dialogs/>
    const profileBlock = ()=> <Profile/>
  return (
      <BrowserRouter>
      <div className={'app-wrapper'}>
          <Header/>
          <NavBar />
          <div className={'content'}>
              <Route path={'/dialogs'} render={dialogsBlock}/>
              <Route path={'/profile'} render={profileBlock}/>
              <Route path={'/news'} render={() => <News/>}/>
              <Route path={'/musik'} render={() => <Musik/>}/>
              <Route path={'/settings'} render={() => <Settings/>}/>
          </div>
      </div>
      </BrowserRouter>
  );
}



