import React, {ChangeEvent, useState} from "react";
import s from './Dialogs.module.css'
import {Message} from "./Messages/Message";
import {Sender} from "./Senders/Sender";
import {Button, Grid, TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";

import {Navigate} from "react-router-dom";
import {DialogPageType} from "../redux/reducers/dialog-reducer";
import {sendMessageAC} from "../redux/actions/messages-actions";



export const Dialogs: FC = () => {

    const {senders, messages} = useSelector<AppRootStateType, DialogPageType>(state=> state.dialog);
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch();

    const EMPTY_STRING =''

    const [inputValue, setInputValue] = useState(EMPTY_STRING);
    const changeMessageText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue(e.currentTarget.value)
    }
    const sendingMessage = () => {
        dispatch(sendMessageAC(inputValue))
        setInputValue(EMPTY_STRING)
    }
    if (!isAuth) return <Navigate to={'/'}/>
    return (
        <div className={s.dialogs}>
            <ul className={`${s.item}  ${s.senders}`}>
                {senders.map(sender => <Sender id={sender.id} name={sender.name} avatar={sender.avatar}
                                               key={sender.id}/>)}
            </ul>
            <div className={s.messageBlock}>
                {messages.map(message => <Message key={message.id} message={message.message} id={message.id}/>)}
                <div>
                    <form noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Write a message" fullWidth={true} value={inputValue}
                                   variant="outlined" style={{margin: "20px 0 10px 0"}}
                                   multiline={true} onChange={changeMessageText}
                        />
                        <Grid container justify={"flex-end"}>
                            <div></div>
                            <Button variant="contained" color="primary" size={'small'} onClick={sendingMessage}>
                                Send Message
                            </Button>
                        </Grid>
                    </form>
                </div>
            </div>
        </div>
    )
}

