import {ACTIONS_TYPE, AddPostActionType} from "./actions";
import {v1} from "uuid";

//-----------------------------------------------------------------
export type ProfilePageType = {
    posts: Array<PostType>
}
export type PostType = {
    id: string
    avatar: string
    message: string
    likeCounts: number
}
//------------------------------------------------------------------------------------
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
    ]
}

export const profileReducer =(state = InitialState,action:AddPostActionType):ProfilePageType=>{
    switch (action.type) {
        case ACTIONS_TYPE.ADD_POST:
            let newPost: PostType = {
                id: v1(),
                avatar: "https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/12/5e2cfd5d1d7c0-bpthumb.jpg",
                message: action.newText,
                likeCounts: 0
            };
            return {...state, posts:[...state.posts,newPost]}


        default:
            return state
    }
}