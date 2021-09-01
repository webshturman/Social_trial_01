import s from '../Dialogs.module.css'
import React from "react";
import state from '../../Components/redux/state'


export const Message: React.FC =(props) =>{
    return (
        <div className={s.item}>
            {state.dialogPage.messages.map( m => <div>{m.message}</div>)}
        </div>
    )
}
