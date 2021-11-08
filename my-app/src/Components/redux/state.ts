import {v1} from "uuid";
import {ACTIONS_TYPE, CommonActionType} from "./actions";


//-----------------------------------------------------------------------
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType //не void, потому что есть return, возвращает весь _state
    _changingState: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: CommonActionType) => void
}
export type RootStateType = {
    dialogPage: DialogPageType
    profilePage: ProfilePageType
}
export type DialogPageType = {
    senders: Array<senderType>
    messages: Array<MessagesType>
}
export type senderType = {
    id: string
    name: string
    avatar?: string
}
export type MessagesType = {
    id: string
    message: string
}
export type ProfilePageType = {
    post: Array<PostType>
}
export type PostType = {
    id: string
    avatar: string
    message: string
    likecounts: number
}
// type ActionAddPostType ={
//     type: 'ADD-POST'
// }
// type ActionChangeMessageType ={
//     type: 'CHANGE-POST-MESSAGE'
//     newText:string
// }
// export type ActionTypes = ActionAddPostType | ActionChangeMessageType

//-----------------------------------------------------------------------------
export const store: StoreType = {
    _state: {
        dialogPage: {
            senders: [
                {
                    id: v1(),
                    name: 'Andrey',
                    avatar: 'https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/14/5e2d01291b6b9-bpthumb.jpg'
                },
                {
                    id: v1(),
                    name: 'Viktoria',
                    avatar: 'https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/4/2020/05/woman-wearing-white-knitted-dress-709790-2-450x320.jpg'
                },
                {
                    id: v1(),
                    name: 'Jessica',
                    avatar: 'https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/6/5e2cccd55f95b-bpthumb.jpg'
                },
                {
                    id: v1(),
                    name: 'Ashley',
                    avatar: 'https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/4/2020/05/woman-wearing-white-knitted-dress-709790-2-450x320.jpg'
                },
                {
                    id: v1(),
                    name: 'Milana',
                    avatar: 'https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/12/5e2cfd5d1d7c0-bpthumb.jpg'
                },
            ],
            messages: [
                {id: v1(), message: 'Privet Medved'},
                {id: v1(), message: 'Hallo malloy'},
                {id: v1(), message: 'Nice very nice'},
                {id: v1(), message: 'Call me ASAP'},
                {id: v1(), message: 'Prosto message'},
            ],
        },

//posts in Profile-------------------------------------------------------------------------
        profilePage: {
            post: [
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
        },

    },
    _changingState() {
        console.log('hello')
    },
    getState() {
        return this._state
    },

    subscribe(observer: () => void) {
        this._changingState = observer
    },

    dispatch(action) {
        switch (action.type) {
            case ACTIONS_TYPE.ADD_POST:
                let newPost: PostType = {
                    id: v1(),
                    avatar: "https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/12/5e2cfd5d1d7c0-bpthumb.jpg",
                    // @ts-ignore
                    message: action.newText,
                    likecounts: 0
                };
                this._state.profilePage.post.push(newPost);
                return this._changingState();

            case ACTIONS_TYPE.SEND_MESSAGE:
                // @ts-ignore
                let newMessage: MessagesType = {
                    id: v1(),
                    // @ts-ignore
                    message: action.newMessage,
                };
                this._state.dialogPage.messages.push(newMessage);
                return this._changingState();
        }
    }

}

//----------------------------------------------------------------




