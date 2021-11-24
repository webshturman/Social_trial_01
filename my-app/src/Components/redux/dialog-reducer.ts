import {ACTIONS_TYPE,  SendMessageActionType} from "./actions";
import {v1} from "uuid";


//-----------------------------------------------------------------------------------
const InitialState: DialogPageType = {
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
}
//---------------------------------------------------------------------------------
export const dialogReducer = (state = InitialState, action: SendMessageActionType): DialogPageType => {
    switch (action.type) {
        case ACTIONS_TYPE.SEND_MESSAGE:
            let newMessage: MessagesType = {
                id: v1(),
                message: action.newMessage,
            };
            return {...state, messages:[...state.messages,newMessage]}

        default:
            return state
    }
}


export type DialogPageType = {
    senders: senderType[]
    messages: MessagesType[]
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