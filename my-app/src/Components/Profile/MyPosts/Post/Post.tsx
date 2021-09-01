import React from "react";
import s from './Post.module.css'
import state from '../../../redux/state'


export const Post: React.FC = () => {
    return (
        <div>
            {state.profilePage.post.map(p => {
                return (
                    <div className={s.newpost}>
                        <img src={p.avatar} alt=""/>
                        <div>
                            {p.message}
                            <div className={s.likes}>
                                <span>like {p.likecounts}</span>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>

    )
}
