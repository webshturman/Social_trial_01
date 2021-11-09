import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";

const rootReducer = combineReducers({
    profile:profileReducer,
    dialog: dialogReducer,
    users:usersReducer,
    // sidebar:sidebarReducer
})
export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>