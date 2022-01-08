import {v1} from "uuid";
import {ProfileActionType} from "../actions/profile-actions";
import {ACTIONS_TYPE} from "../../../enums/action-types";
import {ProfileType} from "../../../api/types/userType";


const InitialState: ProfilePageType ={
    posts: [
        {
            id: v1(),
            avatar: "https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/6/5e2cccd55f95b-bpthumb.jpg",
            message: 'Hello my friend',
            likeCounts: 15
        },
        {
            id: v1(),
            avatar: "https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/12/5e2cfd5d1d7c0-bpthumb.jpg",
            message: 'Nice to see you again',
            likeCounts: 20
        },
    ],
    // profile: {aboutMe: "я круто чувак 1001%",
    //     contacts: {
    //         facebook: "facebook.com",
    //         website: null,
    //         vk: "vk.com/dimych",
    //         twitter: "https://twitter.com/@sdf",
    //         instagram: "instagra.com/sds",
    //         youtube: null,
    //         github: "github.com",
    //         mainLink: null
    //     },
    //     "lookingForAJob": true,
    //     "lookingForAJobDescription": "не ищу, а дурачусь",
    //     "fullName": "samurai dimych",
    //     "userId": 2,
    //     "photos": {
    //         "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
    //         "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
    //     }}
    // @ts-ignore
    profile:null,
    status:''

}

export const profileReducer =(state = InitialState,action:ProfileActionType):ProfilePageType=>{
    switch (action.type) {
        case ACTIONS_TYPE.ADD_POST:
            let newPost: PostType = {
                id: v1(),
                avatar: "https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/12/5e2cfd5d1d7c0-bpthumb.jpg",
                message: action.newText,
                likeCounts: 0
            };
            return {...state, posts:[...state.posts,newPost]}

        case ACTIONS_TYPE.GET_PROFILE:
            return {...state, profile:action.profile}
        case ACTIONS_TYPE.SET_USER_STATUS:
            return {...state, status:action.status}
        case ACTIONS_TYPE.CLEAR_PROFILE_DATA:
            return InitialState
        default:
            return state
    }
}


export type ProfilePageType = {
    posts: Array<PostType>
    profile: ProfileType
    status:string
}
export type PostType = {
    id: string
    avatar: string
    message: string
    likeCounts: number
}