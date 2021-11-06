import React from "react";
import s from './Dialogs.module.css'
import {Message} from "./Messages/Message";
import {Senders} from "./Senders/Senders";
import {DialogPageType} from "../Components/redux/state";
import {CommonActionType} from "../Components/redux/actions";

export type DialogsPropsType = {
    dialog:DialogPageType
    dispatch: (action: CommonActionType) => void
}


export const Dialogs: React.FC<DialogsPropsType> = ({...restProps}) => {
    return (
        <div className={s.dialogs}>
            {/*<h1>Dialogs</h1>*/}
            <Senders {...restProps}/>
            <Message {...restProps}/>
        </div>
    )
}