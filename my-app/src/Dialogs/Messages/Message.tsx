import s from '../Dialogs.module.css'
import React, {ChangeEvent, useState} from "react";
import {MessagesType} from "../../Components/redux/state";
import {Button, Grid, TextField} from "@material-ui/core";
import {sendMessageAC} from "../../Components/redux/actions";
import {DialogsPropsType} from "../Dialogs";

// export type MessagePropsType = {
//     messages:Array<MessagesType>
// }


export const Message: React.FC<DialogsPropsType> = ({dialog,dispatch}) =>{
    const [inputValue,setInputValue] = useState('')
    const changeMessageText = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setInputValue(e.currentTarget.value)
    }
    const sendingMessage = () => {
        dispatch(sendMessageAC(inputValue))
        setInputValue('')
    }
    return (
        <div className={s.item}>
            {dialog.messages.map(m => <div key={m.id}>{m.message}</div>)}
            {/*<Container fixed>*/}
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
            {/*</Container>*/}
        </div>
    )
}

