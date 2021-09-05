import React from "react";
import s from './Post.module.css'
import state, {PostType} from '../../../redux/state'
import {IconButton} from "@material-ui/core";
import {ThumbUpAltSharp} from "@material-ui/icons";
import {AddPostPropsType} from "../../Profile";

type PostPropsType ={
    post: Array<PostType>
}

export const Post: React.FC<PostPropsType> = ({post}) => {
    return (
        <div>
            {post.map(p => {
                return (
                    <div className={s.newpost} key={p.id}>
                        <img src={p.avatar} alt=""/>
                        <div>
                            {p.message}
                            <div className={s.likes}>
                                <IconButton size={'small'} color={"primary"} style={{padding:"0"}}>
                                    <ThumbUpAltSharp style={{fontSize:"1rem"}}/>
                                </IconButton>
                                <span> {p.likecounts}</span>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}
