
import ReactDOM from "react-dom";
import React from "react";
import {App} from "./App";
import {RootStateType} from "./Components/redux/state";


export const rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}