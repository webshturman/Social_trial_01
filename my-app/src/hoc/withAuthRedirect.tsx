import { Navigate } from "react-router-dom"
import {AppRootStateType} from "../Components/redux/store";
import {connect} from "react-redux";
import {ComponentType} from "react";


const mapStateToProps =(state:AppRootStateType):mapStateToPropsType=> {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component:ComponentType<T>){
    const RedirectComponent=(props:mapStateToPropsType)=>{
        const{isAuth, ...restProps}=props
        if(!isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps as T}/>
    }
    const RedirectContainer = connect(mapStateToProps)(RedirectComponent)
    return RedirectContainer
}


export type mapStateToPropsType = {
    isAuth:boolean
}