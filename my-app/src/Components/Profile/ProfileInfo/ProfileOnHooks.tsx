import React, {useEffect} from 'react';
import {Profile} from "../Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {ProfileType} from "../../../api/user-api";
import {useParams} from "react-router-dom";
import {getProfileData} from "../../redux/profile-reducer";
import {LinearProgress} from "@material-ui/core";

export const ProfileOnHooks = () => {
    const profile = useSelector<AppRootStateType,ProfileType>(state => state.profile.profile)
    const dispatch = useDispatch()
    let {userId} = useParams()

    useEffect(()=>{
        if(!userId) userId = '2'
        dispatch(getProfileData(userId))
    },[])
    if(!profile){
        return <LinearProgress/>
    }
    return (
        <div>
            <Profile profile={profile}/>
        </div>
    );
};
