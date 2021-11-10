import React, {FC} from 'react';
import {UsersCommonType} from "./UsersContainer";
import s from './Users.module.css'
import {Button} from "@material-ui/core";
import {User} from "./User";

export const Users: FC<UsersCommonType> = ({users,toFollow}) => {
    return (
        <div className={s.usersContainer}>
            <div className={s.usersList}>
                {users.users.map(user => <User id={user.id} fullName={user.fullName} avatar={user.avatar}
                                               followed={user.followed} key={user.id} toFollow={toFollow}
                                                status={user.status} location={user.location}/>)}
            </div>
            <div className={s.showButton}>
                <Button variant="contained" color="primary" size={'small'}>
                    Show More
                </Button>
            </div>
        </div>
    );
};

