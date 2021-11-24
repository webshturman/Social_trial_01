import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {Profile} from "./Profile";
import {ProfileType} from "../../api/user-api";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getProfileData} from "../redux/profile-reducer";


export class ProfileContainer extends React.Component<PropsType,AppRootStateType>{

    componentDidMount() {
        let userId=this.props.match.params.userId
        if(!userId) userId = '2'
        this.props.getProfileData(userId)
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
export const ProfileConnector = connect(mapStateToProps,{getProfileData})(withUrlData)



export type mapStateToPropsType = {
    profile:ProfileType
}

export type mapDispatchPropsType = {
    getProfileData: (userId:string)=> void
}
type PathParamsType = {
    userId:string
}

export type ProfileContainerType = mapDispatchPropsType & mapStateToPropsType
export type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType