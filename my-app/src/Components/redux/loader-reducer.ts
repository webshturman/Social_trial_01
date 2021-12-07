import {ACTIONS_TYPE, LoaderActionType} from "./actions";

export const InitialLoaderState:InitialLoaderStateType ={
    isInitialized:false,
}


export const loaderReducer = (state: InitialLoaderStateType  = InitialLoaderState, action: LoaderActionType):InitialLoaderStateType=> {
    switch (action.type) {
        case ACTIONS_TYPE.GET_INITIALIZED:
            return {...state, isInitialized:action.initialized}
        default:
            return state;
    }
}

//-------------------------------------------------------------------------------------


export type InitialLoaderStateType={
    isInitialized: boolean
}