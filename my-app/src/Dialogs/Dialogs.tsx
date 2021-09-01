import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'
import {Message} from "./Messages/Message";
import {Senders} from "./Senders/Senders";
import state from '../Components/redux/state'



export const Dialogs: React.FC = () => {

    return (
        <div className={s.dialogs}>
            {/*<h1>Dialogs</h1>*/}
            <Senders/>
            <Message/>
        </div>
    )
}