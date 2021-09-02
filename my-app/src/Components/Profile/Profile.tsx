import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost} from "../redux/state";

export type AddPostPropsType ={
    // message:string
    addPost: (message:string) => void
}



export const Profile:React.FC<AddPostPropsType> = ({addPost}) => {
    return (
    <div>
        <ProfileInfo/>
        <MyPosts addPost={addPost}/>
    </div>
    )
}
