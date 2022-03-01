import React, {FC} from 'react';

import s from './Users.module.css'
import bear from '../../assets/images/bear.png'
import {Button} from "@material-ui/core";
import {NavLink} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {UserType} from "../../api/types/userType";
import {toFollow, toUnFollow} from "../redux/thunks/users-thunks";


export const User: FC<UserType> = (
    {
        id, name, photos,
        followed, status
    }) => {

    const dispatch = useDispatch()
    const photo = photos.small !==null  ? photos.small : bear

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

