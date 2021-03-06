import {applyMiddleware, combineReducers, compose, createStore} from "redux";

import thunk, {ThunkAction} from "redux-thunk";

import {profileReducer} from "./reducers/profile-reducer";
import {dialogReducer} from "./reducers/dialog-reducer";
import {authReducer} from "./reducers/auth-reducer";
import {usersReducer} from "./reducers/users-reducer";
import {loaderReducer} from "./reducers/loader-reducer";
import {ProfileActionType} from "./actions/profile-actions";
import {SendMessageActionType} from "./actions/messages-actions";
import {LoaderActionType} from "./actions/loader-actions";
import {AuthDataActionType} from "./actions/auth-actions";
import {CommonUsersActionType} from "./actions/user-actions";

const rootReducer = combineReducers({
    profile:profileReducer,
    dialog: dialogReducer,
    users:usersReducer,
    auth:authReducer,
    loader: loaderReducer,
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export type AppRootStateType = ReturnType<typeof rootReducer>


export type AppActionsType = ProfileActionType | SendMessageActionType | CommonUsersActionType
    | AuthDataActionType | LoaderActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>


// @ts-ignore
window.store = store
