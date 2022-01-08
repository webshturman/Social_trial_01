import React, {FC, ReactElement, useEffect} from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../api/types/userType";
import {AppRootStateType} from "../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useParams} from "react-router-dom";
import {getProfileData} from "../redux/thunks/profile-thunks";
import {LinearProgress} from "@material-ui/core";


const Profile = () => {
    const profile = useSelector<AppRootStateType, ProfileType>(state => state.profile.profile)
    const authorizedId = useSelector<AppRootStateType, string | null>(state => state.auth.id)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()
    let {userId} = useParams()

    useEffect(()=>{
        if(!isAuth){
            return
        }
        if(userId) {
            dispatch(getProfileData(userId));
        }
        if(!userId && authorizedId){
            dispatch(getProfileData(authorizedId))
        }

    },[isAuth,userId,authorizedId])


    if(!isAuth){
        return <Navigate to={'/login'}/>
    }
    if(!profile){
        return <LinearProgress/>
    }

    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}
export default Profile as React.FC


