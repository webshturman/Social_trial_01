
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {addPostAC} from "../redux/actions";
import {AppRootStateType} from "../redux/store";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilePageType} from "../redux/profile-reducer";
//-------------------------------------------------------------------------------------------
export type mapStateToPropsType = {
    posts:ProfilePageType
}

export type mapDispatchPropsType = {
    addPost: (newText:string)=> void
}
export type ProfilePostType = mapDispatchPropsType & mapStateToPropsType
//------------------------------------------------------------------------------------------------------

const mapStateToProps =(state:AppRootStateType):mapStateToPropsType=> {
    return {
        posts: state.profile
    }
}
const mapDispatchToProps =(dispatch:Dispatch):mapDispatchPropsType=> {
    return {
        addPost(newText:string) {
            dispatch(addPostAC(newText))
        }
    }
}
export const ProfileConnector = connect(mapStateToProps,mapDispatchToProps)(MyPosts)