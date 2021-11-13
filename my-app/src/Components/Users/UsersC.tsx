import {UsersAPI} from "../../api/user-api";
import s from "./Users.module.css";
import {User} from "./User";
import {Button} from "@material-ui/core";
import {UsersCommonType} from "./UsersContainer";
import {AppRootStateType} from "../redux/store";
import React from "react";


// class Users extends React.Component = ({users,toFollow,getUsersFromApi}) => {

export class Users extends React.Component<UsersCommonType, AppRootStateType> {

    // constructor(props: UsersCommonType) {
    //     super(props)
    //     UsersAPI.getUsers()
    //         .then((res) => {
    //             this.props.getUsersFromApi(res.data.items)
    //         })
    // }
    componentDidMount() {
        UsersAPI.getUsers()
            .then((res) => {
                this.props.getUsersFromApi(res.data.items)
            })
    }

    render() {

        return (
            <div className={s.usersContainer}>
                <div className={s.usersList}>
                    {this.props.users.items.map(user => <User id={user.id} name={user.name} photos={user.photos}
                                                              followed={user.followed} key={user.id}
                                                              toFollow={this.props.toFollow}
                                                              status={user.status}
                                                              uniqueUrlName={user.uniqueUrlName}/>)}
                </div>
                <div className={s.showButton}>
                    <Button variant="contained" color="primary" size={'small'}>
                        Show More
                    </Button>
                </div>
            </div>
        );
    }

};
