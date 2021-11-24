import React from "react";
import {Header} from "./Header";
import {AuthDataType} from "../../api/user-api";
import {AppRootStateType} from "../redux/store";
import {connect} from "react-redux";
import {toBeAuthorized} from "../redux/auth-reducer";


export class HeaderContainer extends React.Component<AuthDataCommonType, AppRootStateType>{

    componentDidMount() {
      this.props.toBeAuthorized()
    };

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
export const AuthDataConnector = connect(mapStateToProps, {toBeAuthorized})(HeaderContainer)


export type mapStateToPropsType = {
    data:AuthDataType
    isAuth:boolean
}

export type mapDispatchPropsType = {
    toBeAuthorized:()=>void
}
export type AuthDataCommonType = mapDispatchPropsType & mapStateToPropsType