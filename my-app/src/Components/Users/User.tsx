import React, {FC} from 'react';

import s from './Users.module.css'
import {Button} from "@material-ui/core";
import {UserType} from "../../api/user-api";

type SingleUserType = UserType & {
    followUser: (isFollow: boolean, userID: number) => void
}
export const User: FC<SingleUserType> = (
    {
        id, name, photos,
        followed, followUser, status
    }) => {
    const photoPath = photos.small !==null  ? photos.small : 'https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/4/2020/05/woman-wearing-white-knitted-dress-709790-2-450x320.jpg'
    const setToFollow =()=> {
        followUser(!followed, id)
    }

    return (
        <div className={s.UserBlock} key={id}>
            <div className={s.followImgBlock}>
                <div>
                    <img src={photoPath} className={s.userImg} alt=""/>
                </div>
                <div>
                    <Button variant="contained" color="primary" size={'small'} onClick={setToFollow}>
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

