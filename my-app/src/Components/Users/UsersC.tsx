import s from "./Users.module.css";
import {User} from "./User";
import {Button, LinearProgress} from "@material-ui/core";
import React, {FC} from "react";
import {UserType} from "../../api/types/userType";
import {Pagination} from "../Pagination/Pagination";



type UsersCType = {
    getUsersForCurrentPage: (pageNumber: number) => void
    totalCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    loadingStatus:boolean
}

export const UsersC: FC<UsersCType> = ({
   getUsersForCurrentPage,
   totalCount,
   pageSize,
   currentPage,
   users,
   loadingStatus
}) => {

    return (
        <div className={s.usersContainer}>
            <Pagination getItems={getUsersForCurrentPage} totalCount={totalCount}
                        pageSize={pageSize} currentPage={currentPage}  portionSize={10}/>
            {loadingStatus && <LinearProgress/>}

            <div className={s.usersList}>
                {users.map(({id,name,photos,followed,status, uniqueUrlName}) => {
                   return  <User id={id} name={name} photos={photos}
                    followed={followed} key={id}
                    status={status}
                    uniqueUrlName={uniqueUrlName}/>
                })}
            </div>
            <div className={s.showButton}>
                <Button variant="contained" color="primary" size={'small'}>
                    Show More
                </Button>
            </div>
        </div>
    );
};

//---------------------------------------------------------------------------------------------------------
// export class Users extends React.Component<UsersCommonType, AppRootStateType> {
//
//
//     componentDidMount() {
//         UsersAPI.getUsers(this.props.currentPage,this.props.pageSize)
//             .then((res) => {
//                 this.props.getUsersFromApi(res.data.items)
//                 this.props.setTotalCount(res.data.totalCount)
//             })
//     }
//     getUsersForCurrentPage(pageNumber:number){
//         UsersAPI.getUsers(pageNumber,this.props.pageSize)
//             .then((res) => {
//                 this.props.getUsersFromApi(res.data.items)
//                 this.props.setCurrentPage(pageNumber)
//             })
//     }
//
//     render() {
//         let pagesAmount = Math.ceil(this.props.totalCount/this.props.pageSize);
//         let pages = [];
//         for(let i=1; i<pagesAmount && i<20; i+=1){
//             pages.push(i)
//         };
//
//         return (
//             <div className={s.usersContainer}>
//                 {pages.map(pageNum=> {
//                     return <span className={pageNum===this.props.currentPage ? s.selectedPage : ''}
//                                  onClick={()=>this.getUsersForCurrentPage(pageNum)}>{pageNum}</span>
//                 })}
//                 <div className={s.usersList}>
//                     {this.props.users.map(user => <User id={user.id} name={user.name} photos={user.photos}
//                                                         followed={user.followed} key={user.id}
//                                                         toFollow={this.props.toFollow}
//                                                         status={user.status}
//                                                         uniqueUrlName={user.uniqueUrlName}/>)}
//                 </div>
//                 <div className={s.showButton}>
//                     <Button variant="contained" color="primary" size={'small'}>
//                         Show More
//                     </Button>
//                 </div>
//             </div>
//         );
//     }
//
// };

//-----------------------------------------------------------------------------------
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
