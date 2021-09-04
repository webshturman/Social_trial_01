import React from "react";
import s from './Dialogs.module.css'
import {Message} from "./Messages/Message";
import {Senders} from "./Senders/Senders";
import state, {MessagesType, RootStateType} from "../Components/redux/state";

export type DialogsPropsType = {
    messages:Array<MessagesType>
}


export const Dialogs: React.FC<DialogsPropsType> = ({messages}) => {
    return (
        <div className={s.dialogs}>
            {/*<h1>Dialogs</h1>*/}
            <Senders/>
            <Message messages={messages}/>
        </div>
    )
}