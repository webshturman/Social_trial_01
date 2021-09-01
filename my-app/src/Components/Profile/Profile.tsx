import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import state from '../redux/state'



export const Profile = () => {
    return (
    <div>
        <ProfileInfo/>
        <MyPosts/>
    </div>
    )
}
