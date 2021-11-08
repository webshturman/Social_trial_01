import {AppRootStateType} from "../Components/redux/store";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {sendMessageAC, SendMessageActionType} from "../Components/redux/actions";
import {Dispatch} from "redux";
import {DialogPageType} from "../Components/redux/state";
//-------------------------------------------------------------------------------------------
export type mapDispatchPropsType = {
    sendMessage: (newMessage:string)=> void
}
export type DialogsType = mapDispatchPropsType & DialogPageType
//------------------------------------------------------------------------------------------------------

const mapStateToProps =(state:AppRootStateType):DialogPageType => {
    return {
        senders: state.dialog.senders,
        messages: state.dialog.messages,
    }
}
const mapDispatchToProps =(dispatch:Dispatch<SendMessageActionType>):mapDispatchPropsType=> {
    return {
        sendMessage(newMessage:string) {
            dispatch(sendMessageAC(newMessage))
        }
    }
}
export const DialogConnector = connect(mapStateToProps,mapDispatchToProps)(Dialogs)