import React from "react";
import {NavLink} from "react-router-dom";
import s from '../Dialogs.module.css'
import {senderType} from "../../Components/redux/state";


// export type SendersPropsType = {
//     sender: Array<senderType>
// }

export const Sender: React.FC<senderType> = ({id, name, avatar}) => {
    let path = `/dialogs/${id}`

    return (

        <div className={s.senderInfo}>
            <li key={id}><NavLink to={path} activeClassName={s.active}>
                <img src={avatar} className={s.senderAva} alt=""/>
                <span>{name}</span>
            </NavLink></li>
        </div>
    )
}
//
// export const Senders: React.FC<senderType > = (props) => {
//
//     return (
//         <ul className={`${s.item}  ${s.senders}`}>
//             {dialog.sender.map((t) => {
//                 let path = `/dialogs/${t.id}`
//                 return (
//                     <div className={s.senderInfo}>
//                         <img src={props.avatar} className={s.senderAva} alt=""/>
//                         <li key={props.id}><NavLink to={path} activeClassName={s.active}>{props.name}</NavLink></li>
//                     </div>
//                 )
//             })
//             }
//         </ul>
//     )
// }