import {v1} from "uuid";
import {ACTIONS_TYPE, FollowUserActionType} from "./actions";

const InitialState:InitialStateUsersType = {
    users:[
        {
            id: v1(),
            followed:false,
            status:'Looking for a job',
            fullName: 'Andrey',
            avatar: 'https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/12/2020/01/man-wearing-eyeglasses-839586-800x533.jpg?1636544438',
            location:{city:'Minsk', country:'Belarus'},
        },
        {
            id: v1(),
            followed:false,
            status:'Unemployed',
            fullName: 'Viktoria',
            avatar: 'https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/4/2020/05/woman-wearing-white-knitted-dress-709790-2-450x320.jpg',
            location:{city:'Moscow', country:'Russia'},
        },
        {
            id: v1(),
            followed:false,
            status:'Looking for some fun',
            fullName: 'Jessica',
            avatar: 'https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/6/2020/01/woman-wearing-red-long-sleeved-dress-holding-pink-petaled-807842-800x563.jpg?1636544497',
            location:{city:'New York', country:'USA'},
        },
    ]
}
export type InitialStateUsersType = {
    users:Array<UserType>
}
export type LocationUserType = {
    city:string,
    country:string,
}
export type UserType={
    id: string,
    followed:boolean,
    status:string,
    fullName: string,
    avatar: string,
    location:LocationUserType,
}


export const usersReducer = (state:InitialStateUsersType=InitialState, action:FollowUserActionType):InitialStateUsersType=> {
    switch(action.type){
        case ACTIONS_TYPE.FOLLOW_USER:
            return {...state,
                users: state.users.map(user=> user.id === action.userID ? {...user, followed:action.isFollow} : user)}
        default: return state
    }
}