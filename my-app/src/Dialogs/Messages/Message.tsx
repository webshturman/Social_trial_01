import s from '../Dialogs.module.css'
import React from "react";
import state, {DialogPageType, MessagesType, RootStateType} from '../../Components/redux/state'
import {DialogsPropsType} from "../Dialogs";



export const Message: React.FC<DialogsPropsType> = ({messages}) =>{
    return (
        <div className={s.item}>
            {messages.map(m => <div key={m.id}>{m.message}</div>)}
        </div>
    )
}

