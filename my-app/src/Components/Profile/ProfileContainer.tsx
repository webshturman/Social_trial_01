import React from "react";
import {connect} from "react-redux";
import {getProfile} from "../redux/actions";
import {AppRootStateType} from "../redux/store";
import {Profile} from "./Profile";
import {ProfileType, UsersAPI} from "../../api/user-api";


export class ProfileContainer extends React.Component<ProfileContainerType,AppRootStateType>{

    componentDidMount() {
        UsersAPI.getProfile()
            .then((res) => {
                this.props.getProfile(res.data)
            })
    };

    render(){
        return <Profile profile={this.props.profile}/>
    }
}


const mapStateToProps =(state:AppRootStateType):mapStateToPropsType=> {
    return {
        profile: state.profile.profile
    }
}
// const mapDispatchToProps =(dispatch:Dispatch):mapDispatchPropsType=> {
//     return {
//         getUserProfile(profile:ProfileType){
//             dispatch(getProfile(profile))
//         }
//     }
// }
export const ProfileConnector = connect(mapStateToProps,{getProfile})(ProfileContainer)

export type mapStateToPropsType = {
    profile:ProfileType
}

export type mapDispatchPropsType = {
    getProfile: (profile:ProfileType)=> void
}
export type ProfileContainerType = mapDispatchPropsType & mapStateToPropsType