import React from "react";
import {NavLink} from "react-router-dom";
import s from '../Dialogs.module.css'
import state, {DialogPageType, senderType} from '../../Components/redux/state'


export type SendersPropsType = {
    sender: Array<senderType>
}

export const Senders: React.FC<SendersPropsType>= ({sender}) => {

    return (
        <ul className={`${s.item}  ${s.senders}`}>
            {sender.map((t) => {
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