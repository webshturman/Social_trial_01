import {ACTIONS_TYPE} from "../../../enums/action-types";


export type LoaderActionType = ReturnType<typeof getInitialized>

export const getInitialized =(initialized:boolean)=> {
    return {type:ACTIONS_TYPE.GET_INITIALIZED, initialized} as const
}