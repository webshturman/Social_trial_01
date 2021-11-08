import React, {ChangeEvent, useState} from "react";
import s from './Dialogs.module.css'
import {Message} from "./Messages/Message";
import {Sender} from "./Senders/Sender";
import {Button, Grid, TextField} from "@material-ui/core";
import {DialogsType} from "./DialogsContainer";


export const Dialogs: React.FC<DialogsType> = ({senders, messages, sendMessage}) => {
    const [inputValue, setInputValue] = useState('')
    const changeMessageText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue(e.currentTarget.value)
    }
    const sendingMessage = () => {
        sendMessage(inputValue)
        setInputValue('')
    }
    return (
        <div className={s.dialogs}>
            <ul className={`${s.item}  ${s.senders}`}>
                {senders.map(sender => <Sender id={sender.id} name={sender.name} avatar={sender.avatar}
                                               key={sender.id}/>)}
            </ul>
            <div>
                {messages.map(message => <Message key={message.id} message={message.message} id={message.id}/>)}
            </div>
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
    )
}

