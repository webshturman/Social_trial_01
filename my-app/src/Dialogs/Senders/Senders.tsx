import React from "react";
import {NavLink} from "react-router-dom";
import s from '../Dialogs.module.css'
import {senderType} from "../../Components/redux/state";
import {DialogsPropsType} from "../Dialogs";


// export type SendersPropsType = {
//     sender: Array<senderType>
// }

export const Senders: React.FC<DialogsPropsType> = ({dialog}) => {

    return (
        <ul className={`${s.item}  ${s.senders}`}>
            {dialog.sender.map((t) => {
                let path = `/dialogs/${t.id}`
                return (
                    <div className={s.senderInfo}>
                        <img src={t.avatar} className={s.senderAva} alt=""/>
                        <li key={t.id}><NavLink to={path} activeClassName={s.active}>{t.name}</NavLink></li>
                    </div>
                )
            })
            }
        </ul>
    )
}