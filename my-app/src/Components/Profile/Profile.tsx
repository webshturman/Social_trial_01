import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../api/types/userType";


export type ProfileInfoType={
    profile:ProfileType
    status:string
    handleUpdateStatus:(status:string)=> void
}


export const Profile:React.FC<ProfileInfoType> = ({profile,status,handleUpdateStatus}) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} handleUpdateStatus={handleUpdateStatus}/>
            <MyPosts/>
        </div>
    )
}



