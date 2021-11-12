import React, {FC, useEffect} from 'react';
import {UsersCommonType} from "./UsersContainer";
import s from './Users.module.css'
import {Button} from "@material-ui/core";
import {User} from "./User";
import {UsersAPI} from "../../api/user-api";

export const Users: FC<UsersCommonType> = ({users,toFollow,getUsersFromApi}) => {
    useEffect(()=> {
        UsersAPI.getUsers()
            .then((res)=> {
                getUsersFromApi(res.data.items)
            })
    }, [])

    return (
        <div className={s.usersContainer}>
            <div className={s.usersList}>
                {users.items.map(user => <User id={user.id} name={user.name} photos={user.photos}
                                               followed={user.followed} key={user.id} toFollow={toFollow}
                                                status={user.status} uniqueUrlName={user.uniqueUrlName}/>)}
            </div>
            <div className={s.showButton}>
                <Button variant="contained" color="primary" size={'small'}>
                    Show More
                </Button>
            </div>
        </div>
    );
};

