import React from "react";
import {Header} from "./Header";
import {AuthDataType, UsersAPI} from "../../api/user-api";
import {AppRootStateType} from "../redux/store";
import {connect} from "react-redux";
import {getAuthData} from "../redux/actions";


export class HeaderContainer extends React.Component<AuthDataCommonType, AppRootStateType>{

    componentDidMount() {
        UsersAPI.getLoginData()
        .then(res=>{
            if(res.data.resultCode===0)
            this.props.getAuthData(res.data.data)
        })
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
export const AuthDataConnector = connect(mapStateToProps, {getAuthData})(HeaderContainer)


export type mapStateToPropsType = {
    data:AuthDataType
    isAuth:boolean
}

export type mapDispatchPropsType = {
    getAuthData:(data:AuthDataType)=>void
}
export type AuthDataCommonType = mapDispatchPropsType & mapStateToPropsType