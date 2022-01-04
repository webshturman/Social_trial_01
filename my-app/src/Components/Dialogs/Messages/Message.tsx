import s from '../Dialogs.module.css'
import React from "react";
import {MessagesType} from "../../redux/reducers/dialog-reducer";



export const Message: React.FC<MessagesType> = ({message,id}) =>{

    return (
        <div className={s.item}>
            {/*{dialog.messages.map(m => <div key={m.id}>{m.message}</div>)}*/}
            <div key={id}>{message}</div>
        </div>
    )
}

// export const Message: React.FC<DialogsPropsType> = ({dialog,dispatch}) =>{
//     const [inputValue,setInputValue] = useState('')
//     const changeMessageText = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
//         setInputValue(e.currentTarget.value)
//     }
//     const sendingMessage = () => {
//         dispatch(sendMessageAC(inputValue))
//         setInputValue('')
//     }
//     return (
//         <div className={s.item}>
//             {/*{dialog.messages.map(m => <div key={m.id}>{m.message}</div>)}*/}
//             <div key={m.id}>{m.message}</div>)}
//             {/*<Container fixed>*/}
//             <form noValidate autoComplete="off" >
//                 <TextField id="outlined-basic" label="Write a message" fullWidth={true} value={inputValue}
//                            variant="outlined" style={{margin: "20px 0 10px 0"}}
//                            multiline={true} onChange={changeMessageText}
//                 />
//                 <Grid container justify={"flex-end"}>
//                     <div></div>
//                     <Button variant="contained" color="primary" size={'small'} onClick={sendingMessage}>
//                         Send Message
//                     </Button>
//                 </Grid>
//             </form>
//             {/*</Container>*/}
//         </div>
//     )
// }