import React from 'react'
import s from './Header.module.css'
import {AuthDataCommonType} from "./HeaderContainer";
import {useDispatch} from "react-redux";
import {setLogOutData} from "../redux/auth-reducer";



export const Header: React.FC<AuthDataCommonType> = ({data,isAuth}) => {
    const dispatch = useDispatch()
    const handleLogOut =()=>{
        dispatch(setLogOutData())
    }
    return  <>
        <header className={s.header}>
            <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/2020/07/logo-icon.svg" alt=""/>
            {/*<LinearProgress />*/}
            {isAuth &&
            <div className={s.login}>
                <div className={s.loginLink}>{data.login}</div>
                <button onClick={handleLogOut}>LogOut</button>
                {/*<button>LogOut</button>*/}
            </div>
                }
         </header>
        </>
}