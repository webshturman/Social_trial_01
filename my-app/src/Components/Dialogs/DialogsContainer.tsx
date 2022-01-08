
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppRootStateType} from "../redux/store";
import {DialogPageType} from "../redux/reducers/dialog-reducer";
import {sendMessageAC} from "../redux/actions/messages-actions";
import Dialogs from "./Dialogs";


export type mapDispatchPropsType = {
    sendMessage: (newMessage:string)=> void
}
export type DialogsType = mapDispatchPropsType & DialogPageType
//------------------------------------------------------------------------------------------------------

const mapStateToProps =(state:AppRootStateType):DialogPageType => {
    return {
        senders:state.dialog.senders,
        messages:state.dialog.messages
    }
}
const mapDispatchToProps =(dispatch:Dispatch):mapDispatchPropsType=> {
    return {
        sendMessage(newMessage:string) {
            dispatch(sendMessageAC(newMessage))
        }
    }
}
connect(mapStateToProps,mapDispatchToProps)(Dialogs)