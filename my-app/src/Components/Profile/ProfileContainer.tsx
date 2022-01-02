import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {Profile} from "./Profile";
import {useParams} from "react-router-dom";
import {getProfileData, getUserStatusData, updateUserStatusData} from "../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {ProfileType} from "../../api/types/userType";

class ProfileContainer extends React.Component<PropsType,AppRootStateType>{

    componentDidMount() {
        let userId=this.props.userId
        if(!userId) userId = this.props.authorizedId
        this.props.getProfileData(userId)
        this.props.getUserStatusData(userId)
    };

    render(){
        return <Profile profile={this.props.profile} status={this.props.status}
        handleUpdateStatus={this.props.updateUserStatusData}/>
    }
}


const mapStateToProps =(state:AppRootStateType):mapStateToPropsType=> {
    return {
        profile: state.profile.profile,
        status: state.profile.status,
        authorizedId: state.auth.id
    }
}

const withRouter = (WrappedComponent:any) => (props:any) => {
    const {userId} = useParams();
    return (
        <WrappedComponent userId={userId} {...props}/>
    );
};

const withUrlData = withRouter(ProfileContainer);
export const ProfileConnector = withAuthRedirect(connect(mapStateToProps,
    {getProfileData,getUserStatusData,updateUserStatusData})(withUrlData))


export type mapStateToPropsType = {
    profile:ProfileType
    status:string
    authorizedId: string | null
}

type mapDispatchPropsType = {
    getProfileData: (userId:string | null)=> void
    getUserStatusData: (userId:string | null)=> void
    updateUserStatusData: (status:string)=> void
}
type PathParamsType = {
    userId:string | null
}

export type ProfileContainerType = mapDispatchPropsType & mapStateToPropsType
export type PropsType = PathParamsType & ProfileContainerType




//------------------------------------------------------------------------
// import React, {useEffect} from 'react';
// import {Profile} from "../Profile";
// import {useDispatch, useSelector} from "react-redux";
// import {AppRootStateType} from "../../redux/store";
// import {ProfileType} from "../../../api/user-api";
// import {useParams} from "react-router-dom";
// import {getProfileData} from "../../redux/profile-reducer";
// import {LinearProgress} from "@material-ui/core";
//
// export const ProfileOnHooks = () => {
//     const profile = useSelector<AppRootStateType,ProfileType>(state => state.profile.profile)
//     const dispatch = useDispatch()
//     let {userId} = useParams()
//
//     useEffect(()=>{
//         if(!userId) userId = '2'
//         dispatch(getProfileData(userId))
//     },[])
//     if(!profile){
//         return <LinearProgress/>
//     }
//     return (
//         <div>
//             <Profile profile={profile}/>
//         </div>
//     );
// };