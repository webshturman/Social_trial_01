import React from 'react';
import {Provider} from "react-redux";
import {store} from "./Components/redux/store";
import {App} from "./App";
import {HashRouter} from "react-router-dom";

export const MainApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
};
