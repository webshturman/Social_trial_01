import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../api/user-api";

export type ProfileInfoType={
    profile:ProfileType
}


export const Profile:React.FC<ProfileInfoType> = ({profile}) => {
    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPosts/>
        </div>
    )
}



