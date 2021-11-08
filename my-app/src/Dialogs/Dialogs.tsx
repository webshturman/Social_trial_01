import React, {ChangeEvent, useState} from "react";
import s from './Dialogs.module.css'
import {Message} from "./Messages/Message";
import {Senders} from "./Senders/Senders";
import {DialogPageType} from "../Components/redux/state";
import {CommonActionType, sendMessageAC} from "../Components/redux/actions";
import {Button, Grid, TextField} from "@material-ui/core";
import {DialogsType} from "./DialogsContainer";

// export type DialogsPropsType = {
//     dialog:DialogPageType
//     dispatch: (action: CommonActionType) => void
// }


export const Dialogs: React.FC<DialogsType> = (props) => {
    const [inputValue,setInputValue] = useState('')
    const changeMessageText = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setInputValue(e.currentTarget.value)
    }
    const sendingMessage = () => {
        props.sendMessage(inputValue)
        setInputValue('')
    }
    return (
        <div className={s.dialogs}>
            <div>
                {props.sender.map(m => <Sender id={m.id} name={m.name} avatar={m.avatar}/> )}
            </div>
            <div>
                {props.messages.map(m => <Message message={m.message}/> )}
            </div>
            <div>
                <form noValidate autoComplete="off" >
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