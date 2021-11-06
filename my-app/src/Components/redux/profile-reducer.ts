import {ACTIONS_TYPE, AddPostActionType, CommonActionType, SendMessageActionType} from "./actions";
import {v1} from "uuid";
import { PostType} from "./state";
//-----------------------------------------------------------------
// export type ProfilePageType = {
//     post: Array<PostType>
// }
// export type PostType = {
//     id: string
//     avatar: string
//     message: string
//     likecounts: number
// }
//------------------------------------------------------------------------------------
const InitialState: Array<PostType>=[
    {
        id: v1(),
        avatar: "https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/6/5e2cccd55f95b-bpthumb.jpg",
        message: 'Hello my friend',
        likecounts: 15
    },
    {
        id: v1(),
        avatar: "https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/12/5e2cfd5d1d7c0-bpthumb.jpg",
        message: 'Nice to see you again',
        likecounts: 20
    },
]

export const profileReducer =(state=InitialState,action:AddPostActionType):Array<PostType>=>{
    switch (action.type) {
        case ACTIONS_TYPE.ADD_POST:
            let newPost: PostType = {
                id: v1(),
                avatar: "https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/12/5e2cfd5d1d7c0-bpthumb.jpg",
                message: action.newText,
                likecounts: 0
            };
            // return [...state, newPost]
            state.push(newPost);
            return state

        default:
            return state
    }
}