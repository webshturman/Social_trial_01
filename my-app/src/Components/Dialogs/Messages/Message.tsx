import s from '../Dialogs.module.css'
import React from "react";
import {MessagesType} from "../../redux/reducers/dialog-reducer";



export const Message: React.FC<MessagesType> = ({message,id}) =>{

    return (
        <div className={s.item}>
            <div key={id}>{message}</div>
        </div>
    )
}

