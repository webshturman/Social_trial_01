
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {Dispatch} from "redux";
import {DialogPageType} from "../redux/dialog-reducer";
import {AppRootStateType} from "../redux/store";
import {sendMessageAC} from "../redux/actions";


//-------------------------------------------------------------------------------------------
// export type mapStateToPropsType = {
//     dialogPage:DialogPageType
// }
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