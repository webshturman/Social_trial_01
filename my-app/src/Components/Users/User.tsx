import React, {FC} from 'react';

import s from './Users.module.css'
import {Button} from "@material-ui/core";
import {NavLink, useParams} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {toFollow, toUnFollow} from "../redux/users-reducer";
import {UserType} from "../../api/types/userType";


export const User: FC<UserType> = (
    {
        id, name, photos,
        followed, status
    }) => {

    const dispatch = useDispatch()
    const photo = photos.small !==null  ? photos.small : 'https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/4/2020/05/woman-wearing-white-knitted-dress-709790-2-450x320.jpg'

    const setToFollow =()=> {
        dispatch(toFollow(id))
    }
    const setUnFollow =()=> {
        dispatch(toUnFollow(id))
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

