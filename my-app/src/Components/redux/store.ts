import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";

const rootReducer = combineReducers({
    profile:profileReducer,
    dialog: dialogReducer,
    sidebar:sidebarReducer
})
export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>