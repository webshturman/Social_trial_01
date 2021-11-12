import {AppRootStateType} from "../redux/store";
import {Dispatch} from "redux";
import {followUserAC, getUsersAC} from "../redux/actions";
import {connect} from "react-redux";

import {InitialStateUsersType} from "../redux/users-reducer";
import {Users} from "./Users";
import {UserType} from "../../api/user-api";

export type mapStateToPropsType = {
    users:InitialStateUsersType
}

export type mapDispatchPropsType = {
    toFollow: (isFollow:boolean, userID:number)=> void
    getUsersFromApi: (users:Array<UserType>) => void
}
export type UsersCommonType = mapDispatchPropsType & mapStateToPropsType
//------------------------------------------------------------------------------------------------------

const mapStateToProps =(state:AppRootStateType):mapStateToPropsType=> {
    return {
        users: state.users
    }
}
const mapDispatchToProps =(dispatch:Dispatch):mapDispatchPropsType=> {
    return {
        toFollow(isFollow:boolean, userID:number) {
            dispatch(followUserAC(isFollow, userID))
        },
         getUsersFromApi(users:Array<UserType>){
             dispatch(getUsersAC(users))
        }
    }
}
export const UsersConnector = connect(mapStateToProps,mapDispatchToProps)(Users)