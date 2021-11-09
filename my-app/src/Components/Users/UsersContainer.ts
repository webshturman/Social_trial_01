import {ProfilePageType} from "../redux/profile-reducer";
import {AppRootStateType} from "../redux/store";
import {Dispatch} from "redux";
import {addPostAC, followUserAC} from "../redux/actions";
import {connect} from "react-redux";
import {MyPosts} from "../Profile/MyPosts/MyPosts";
import {InitialStateUsersType} from "../redux/users-reducer";
import {Users} from "./Users";

export type mapStateToPropsType = {
    users:InitialStateUsersType
}

export type mapDispatchPropsType = {
    toFollow: (isFollow:boolean, userID:string)=> void
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
        toFollow(isFollow:boolean, userID:string) {
            dispatch(followUserAC(isFollow, userID))
        }
    }
}
export const UsersConnector = connect(mapStateToProps,mapDispatchToProps)(Users)