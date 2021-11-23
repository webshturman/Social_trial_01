import React, {FC} from 'react';

import s from './Users.module.css'
import {Button} from "@material-ui/core";
import {UsersAPI, UserType} from "../../api/user-api";
import { NavLink } from 'react-router-dom';

type SingleUserType = UserType & {
    followUser: (isFollow: boolean, userID: number) => void
}
export const User: FC<SingleUserType> = (
    {
        id, name, photos,
        followed, followUser, status
    }) => {
    const photo = photos.small !==null  ? photos.small : 'https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/4/2020/05/woman-wearing-white-knitted-dress-709790-2-450x320.jpg'
    const setToFollow =()=> {
        UsersAPI.setFollowStatus(id)
            .then(res=>{
                if(res.data.resultCode===0){
                    followUser(true,id)
                }
            })
    }
    const setUnFollow =()=> {
        UsersAPI.deleteFollowStatus(id)
            .then(res=>{
                if(res.data.resultCode===0){
                    followUser(false,id)
                }
            })
    }
    return (
        <div className={s.UserBlock} key={id}>
            <div className={s.followImgBlock}>
                <NavLink to={`/profile/${id}`}>
                    <div>
                        <img src={photo} className={s.userImg} alt=""/>
                    </div>
                </NavLink>

                <div>
                    <Button variant="contained" color="primary" size={'small'}
                            onClick={followed ? setUnFollow : setToFollow}>
                        {followed ? 'UNFOLLOW' : 'FOLLOW'}
                    </Button>
                </div>
            </div>
            <div>
                <div>
                    <div>{name}</div>
                    <div>{status}</div>
                </div>
                <div>
                    <div>{'Moscow'}</div>
                    <div>{'Russia'}</div>
                </div>
            </div>
        </div>
    );
};

