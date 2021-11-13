import {AppRootStateType} from "../redux/store";
import {Dispatch} from "redux";
import {followUserAC, getUsersAC} from "../redux/actions";
import {connect} from "react-redux";


import {UserType} from "../../api/user-api";
import {Users} from "./UsersC";

export type mapStateToPropsType = {
    users:Array<UserType>
    totalCount:number
    currentPage:number
    pageSize:number
}

export type mapDispatchPropsType = {
    toFollow: (isFollow:boolean, userID:number)=> void
    getUsersFromApi: (users:Array<UserType>) => void
}
export type UsersCommonType = mapDispatchPropsType & mapStateToPropsType
//------------------------------------------------------------------------------------------------------

const mapStateToProps =(state:AppRootStateType):mapStateToPropsType=> {
    return {
        users: state.users.items,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage,
        pageSize:state.users.pageSize
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