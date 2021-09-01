
import {v1} from "uuid";

//----------------------------------------------------------------------------
type RootStateType = {
    dialogPage: DialogPageType
    profilePage: ProfilePageType
}
type DialogPageType = {
    sender: Array<senderType>
    messages: Array<MessagesType>
}
type senderType = {
    id: string
    name: string
    avatar?: string
}
type MessagesType ={
    id:string
    message:string
}
type ProfilePageType = {
    post: Array<PostType>
}
type PostType = {
    id: string
    avatar: string
    message: string
    likecounts: number
}
//-----------------------------------------------------------------------------
 let state: RootStateType = {
    dialogPage: {
        sender: [
            {id:v1(), name: 'Andrey', avatar:'https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/14/5e2d01291b6b9-bpthumb.jpg'},
            {id:v1(), name: 'Viktoria', avatar:'https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/4/2020/05/woman-wearing-white-knitted-dress-709790-2-450x320.jpg'},
            {id:v1(), name: 'Jessica', avatar:'https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/6/5e2cccd55f95b-bpthumb.jpg'},
            {id:v1(), name: 'Ashley', avatar:'https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/4/2020/05/woman-wearing-white-knitted-dress-709790-2-450x320.jpg'},
            {id:v1(), name: 'Milana', avatar:'https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/12/5e2cfd5d1d7c0-bpthumb.jpg'},
        ],
         messages: [
            {id:v1(), message: 'Privet Medved'},
            {id:v1(), message: 'Hallo malloy'},
            {id:v1(), message: 'Nice very nice'},
            {id:v1(), message: 'Call me ASAP'},
            {id:v1(), message: 'Prosto message'},
        ]
    },

//posts in Profile-------------------------------------------------------------------------
    profilePage: {
       post: [
            {
                id:v1(),
                avatar: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg",
                message: 'Hello my friend',
                likecounts:15
            },
            {
                id:v1(),
                avatar: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg",
                message: 'Nice to see you again',
                likecounts:20
            },
        ]
    }

}
export default state