import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../redux/state";
import {CommonActionType} from "../redux/actions";



export type AddPostPropsType ={
    // addPost: () => void
    // changingPostMessage:(newText:string) =>void
    dispatch: (action: CommonActionType) => void
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



