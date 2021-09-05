import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {changingPostMessage, PostType, ProfilePageType} from "../redux/state";


export type AddPostPropsType ={
    addPost: () => void
    changingPostMessage:(newText:string) =>void
    postData: ProfilePageType
}

export const Profile:React.FC<AddPostPropsType> = ({...restProps}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts {...restProps}/>
        </div>
    )
}



