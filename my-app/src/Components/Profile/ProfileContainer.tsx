import React from "react";
import {connect} from "react-redux";
import {getProfile} from "../redux/actions";
import {AppRootStateType} from "../redux/store";
import {Profile} from "./Profile";
import {ProfileType, UsersAPI} from "../../api/user-api";
import {RouteComponentProps, withRouter } from "react-router-dom";


export class ProfileContainer extends React.Component<PropsType,AppRootStateType>{

    componentDidMount() {
        let userId=this.props.match.params.userId
        if(!userId) userId = '2'
        UsersAPI.getProfile(userId)
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
type PathParamsType = {
    userId:string
}

export type ProfileContainerType = mapDispatchPropsType & mapStateToPropsType
export type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType