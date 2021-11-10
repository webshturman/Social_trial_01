import React, {FC} from 'react';
import {UserType} from "../redux/users-reducer";
import s from './Users.module.css'
import {Button} from "@material-ui/core";

type SingleUserType = UserType & {
    toFollow: (isFollow: boolean, userID: string) => void
}
export const User: FC<SingleUserType> = (
    {
        id, fullName, avatar, location,
        followed, toFollow, status
    }) => {
    const setToFollow =()=> {
        toFollow(!followed, id)
    }
    return (
        <div className={s.UserBlock} key={id}>
            <div className={s.followImgBlock}>
                <div>
                    <img src={avatar} className={s.userImg} alt=""/>
                </div>
                <div>
                    <Button variant="contained" color="primary" size={'small'} onClick={setToFollow}>
                        {followed ? 'UNFOLLOW' : 'FOLLOW'}
                    </Button>
                </div>
            </div>
            <div>
                <div>
                    <div>{fullName}</div>
                    <div>{status}</div>
                </div>
                <div>
                    <div>{location.city}</div>
                    <div>{location.country}</div>
                </div>
            </div>
        </div>
    );
};

