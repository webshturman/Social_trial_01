import React from "react";
import {NavLink} from "react-router-dom";
import s from '../Dialogs.module.css'
import {senderType} from "../../redux/reducers/dialog-reducer";


export const Sender: React.FC<senderType> = ({id, name, avatar}) => {
    let path = `/dialogs/${id}`

    return (

        <div>
            {/*<li key={id}><NavLink to={path} activeClassName={s.active}>*/}
            <li key={id}><NavLink to={path}  className={({isActive}) => isActive ? s.active :''}>
                <div  className={s.senderInfo}>
                    <img src={avatar} className={s.senderAva} alt=""/>
                    <div>{name}</div>
                </div>
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