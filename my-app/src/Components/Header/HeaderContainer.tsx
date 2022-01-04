import React from "react";
import {Header} from "./Header";

import {AppRootStateType} from "../redux/store";
import {connect} from "react-redux";
import {AuthDataType} from "../../api/types/userType";



export class HeaderContainer extends React.Component<AuthDataCommonType, AppRootStateType>{

    render(){
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        data:state.auth,
        isAuth:state.auth.isAuth
    }
}
export const AuthDataConnector = connect(mapStateToProps)(HeaderContainer)


export type mapStateToPropsType = {
    data:AuthDataType
    isAuth:boolean
}

// export type mapDispatchPropsType = {
//     toBeAuthorized:()=>void
// }
export type AuthDataCommonType = mapStateToPropsType
// export type AuthDataCommonType = mapDispatchPropsType & mapStateToPropsType