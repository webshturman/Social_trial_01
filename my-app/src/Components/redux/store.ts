import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {
    AuthDataActionType,
    CommonUsersActionType,
    LoaderActionType,
    ProfileActionType,
    SendMessageActionType
} from "./actions";
import {loaderReducer} from "./loader-reducer";

const rootReducer = combineReducers({
    profile:profileReducer,
    dialog: dialogReducer,
    users:usersReducer,
    auth:authReducer,
    loader: loaderReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>


export type AppActionsType = ProfileActionType | SendMessageActionType | CommonUsersActionType
    | AuthDataActionType | LoaderActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

//AppActionsType -- общий тип всех редьюсеров
// AppThunk -- единый тип для санок


// @ts-ignore
window.store = store