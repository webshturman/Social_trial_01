import React from "react";
import s from './Dialogs.module.css'
import {Message} from "./Messages/Message";
import {Senders} from "./Senders/Senders";
import {DialogPageType} from "../Components/redux/state";

export type DialogsPropsType = {
    dialog:DialogPageType
}


export const Dialogs: React.FC<DialogsPropsType> = ({dialog}) => {
    return (
        <div className={s.dialogs}>
            {/*<h1>Dialogs</h1>*/}
            <Senders sender={dialog.sender}/>
            <Message messages={dialog.messages}/>
        </div>
    )
}