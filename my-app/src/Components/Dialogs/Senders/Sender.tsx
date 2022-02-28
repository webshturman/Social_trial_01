import React from "react";
import {NavLink} from "react-router-dom";
import s from '../Dialogs.module.css'
import {senderType} from "../../redux/reducers/dialog-reducer";


export const Sender: React.FC<senderType> = ({id, name, avatar}) => {
    let path = `/dialogs/${id}`

    return (
        <div>
            <li key={id}><NavLink to={path} className={({isActive}) => isActive ? s.active : ''}>
                <div className={s.senderInfo}>
                    <img src={avatar} className={s.senderAva} alt=""/>
                    <div>{name}</div>
                </div>
            </NavLink></li>
        </div>
    )
}
