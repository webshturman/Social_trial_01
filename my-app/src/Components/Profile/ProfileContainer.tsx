import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {Profile} from "./Profile";
import {ProfileType} from "../../api/user-api";
import {useParams} from "react-router-dom";
import {getProfileData} from "../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



class ProfileContainer extends React.Component<PropsType,AppRootStateType>{

    componentDidMount() {
        console.log(this.props.userId)
        let userId=this.props.userId
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

const withRouter = (WrappedComponent:any) => (props:any) => {
    const {userId} = useParams();
    return (
        <WrappedComponent userId={userId} {...props}/>
    );
};

const withUrlData = withRouter(ProfileContainer);
export const ProfileConnector = withAuthRedirect(connect(mapStateToProps,{getProfileData})(withUrlData))


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
export type PropsType = PathParamsType & ProfileContainerType
