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
        UsersAPI.getUsers(this.props.currentPage,this.props.pageSize)
            .then((res) => {
                this.props.getUsersFromApi(res.data.items)
            })
    }

    render() {
        let pagesAmount = Math.ceil(this.props.totalCount/this.props.pageSize);
        let pages = [];
        for(let i=1; i<=pagesAmount; i+=1){
            pages.push(i)
        };
        return (
            <div className={s.usersContainer}>
                {pages.forEach(pageNum=>{
                    return <span className={pageNum===this.props.currentPage ? s.selectedPage : ''}>{pageNum}</span>
                })}
                <div className={s.usersList}>
                    {this.props.users.map(user => <User id={user.id} name={user.name} photos={user.photos}
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



// import React, {FC, useEffect} from 'react';
// import {UsersCommonType} from "./UsersContainer";
// import s from './Users.module.css'
// import {Button} from "@material-ui/core";
// import {User} from "./User";
// import {UsersAPI} from "../../api/user-api";
//
// export const Users: FC<UsersCommonType> = ({users,toFollow,getUsersFromApi}) => {
//     useEffect(()=> {
//         //@ts-ignore
//         UsersAPI.getUsers()
//             .then((res)=> {
//                 getUsersFromApi(res.data.items)
//             })
//     }, [])
//
//     return (
//         <div className={s.usersContainer}>
//             <div className={s.usersList}>
//                 {/*@ts-ignore*/}
//                 {users.items.map(user => <User id={user.id} name={user.name} photos={user.photos}
//                                                followed={user.followed} key={user.id} toFollow={toFollow}
//                                                status={user.status} uniqueUrlName={user.uniqueUrlName}/>)}
//             </div>
//             <div className={s.showButton}>
//                 <Button variant="contained" color="primary" size={'small'}>
//                     Show More
//                 </Button>
//             </div>
//         </div>
//     );
// };
