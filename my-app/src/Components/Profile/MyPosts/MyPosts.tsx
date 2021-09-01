import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

//------------------------------------------------------------------------------------------

export const MyPosts: React.FC = () => {
    return (
        <div className={s.myposts}>
            My post
            <form action="#" className={s.form}>
                <div><textarea></textarea></div>
                <div className={s.footer}>
                    <div></div>
                    <button>Send me</button>
                </div>
            </form>
            <div>
                <Post/>
            </div>
        </div>
    )
}
