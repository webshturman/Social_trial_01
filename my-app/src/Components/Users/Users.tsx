import React, {FC, useEffect} from 'react';
import {UsersCommonType} from "./UsersContainer";
import s from './Users.module.css'
import {Button} from "@material-ui/core";
import {User} from "./User";
import {UsersAPI} from "../../api/user-api";

export const Users: FC<UsersCommonType> = ({users,toFollow,getUsersFromApi}) => {
    useEffect(()=> {
        UsersAPI.getUsers()
            //@ts-ignore
            .then((res)=> {
                getUsersFromApi(res.data)
            })
    }, [])

    return (
        <div className={s.usersContainer}>
            <div className={s.usersList}>
                {/*@ts-ignore*/}
                {users.items.map(user => <User id={user.id} name={user.name} photos={user.photos.small}
                                               followed={user.followed} key={user.id} toFollow={toFollow}
                                                status={user.status} />)}
            </div>
            <div className={s.showButton}>
                <Button variant="contained" color="primary" size={'small'}>
                    Show More
                </Button>
            </div>
        </div>
    );
};

