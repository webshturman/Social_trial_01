import s from '../Dialogs.module.css'
import React from "react";
import {MessagesType} from "../../Components/redux/state";

export type MessagePropsType = {
    messages:Array<MessagesType>

}


export const Message: React.FC<MessagePropsType> = ({messages}) =>{
    return (
        <div className={s.item}>
            {messages.map(m => <div key={m.id}>{m.message}</div>)}
        </div>
    )
}

