import React from "react";
import {connect} from "react-redux";
import {getProfile} from "../redux/actions";
import {AppRootStateType} from "../redux/store";
import {Profile} from "./Profile";
import {ProfileType, UsersAPI} from "../../api/user-api";
import { withRouter } from "react-router-dom";


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
const withUrlData = withRouter(ProfileContainer)
export const ProfileConnector = connect(mapStateToProps,{getProfile})(withUrlData)



export type mapStateToPropsType = {
    profile:ProfileType
}

export type mapDispatchPropsType = {
    getProfile: (profile:ProfileType)=> void
}

export type ProfileContainerType = mapDispatchPropsType & mapStateToPropsType