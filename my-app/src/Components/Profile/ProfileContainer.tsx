import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {Profile} from "./Profile";
import {ProfileType} from "../../api/user-api";
// import {RouteComponentProps} from "react-router-dom";
import {getProfileData} from "../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { useParams } from "react-router-dom";
// import { withRouter } from "react-router-dom";


export class ProfileContainer extends React.Component<PropsType,AppRootStateType>{

    componentDidMount() {
        let userId=this.props.params.userId
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
    const params = useParams();
    // etc... other react-router-dom v6 hooks

    return (
        <WrappedComponent
            {...props}
            params={params}
            // etc...
        />
    );
};
const withUrlData = withRouter(ProfileContainer)
// export const ProfileConnector = withAuthRedirect(connect(mapStateToProps,{getProfileData})(withUrlData))
export const ProfileConnector = connect(mapStateToProps,{getProfileData})(withUrlData)


export type mapStateToPropsType = {
    profile:ProfileType
}

export type mapDispatchPropsType = {
    getProfileData: (userId:string)=> void
}
type PathParamsType = {
    params:{
        userId:string
    }

}

export type ProfileContainerType = mapDispatchPropsType & mapStateToPropsType
export type PropsType = PathParamsType & ProfileContainerType
// export type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType