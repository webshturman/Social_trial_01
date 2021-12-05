import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {AuthDataActionType, CommonUsersActionType, ProfileActionType, SendMessageActionType} from "./actions";

const rootReducer = combineReducers({
    profile:profileReducer,
    dialog: dialogReducer,
    users:usersReducer,
    auth:authReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>


export type AppActionsType = ProfileActionType | SendMessageActionType | CommonUsersActionType | AuthDataActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

//AppActionsType -- общий тип всех редьюсеров
// AppThunk -- единый тип для санок


// @ts-ignore
window.store = store