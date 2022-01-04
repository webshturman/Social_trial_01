import React from "react";
import s from './Post.module.css'
import {IconButton} from "@material-ui/core";
import {ThumbUpAltSharp} from "@material-ui/icons";
import {PostType} from "../../../redux/reducers/profile-reducer";

export const Post: React.FC<PostType> = (
    {
        id,
        avatar,
        message,
        likeCounts,
    }) => {
    return (
        <div>
            <div className={s.newpost} key={id}>
                <img src={avatar} alt=""/>
                <div>
                    {message}
                    <div className={s.likes}>
                        <IconButton size={'small'} color={"primary"} style={{padding: "0"}}>
                            <ThumbUpAltSharp style={{fontSize: "1rem"}}/>
                        </IconButton>
                        <span> {likeCounts}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
