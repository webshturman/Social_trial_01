import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../api/user-api";

export type ProfileInfoType={
    profile:ProfileType
    status:string
}


export const Profile:React.FC<ProfileInfoType> = ({profile,status}) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status}/>
            <MyPosts/>
        </div>
    )
}



