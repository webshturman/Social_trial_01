import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import {AuthDataCommonType} from "./HeaderContainer";


// export const Header: React.FC = () => {
//     return  <header className={s.header}>
//             <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/2020/07/logo-icon.svg" alt=""/>
//         </header>
// }

export const Header: React.FC<AuthDataCommonType> = ({data,isAuth}) => {
    return  <>
        <header className={s.header}>
            <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/2020/07/logo-icon.svg" alt=""/>
            {/*<LinearProgress />*/}
            <div>
                {isAuth ? <span className={s.loginLink}>{data.login}</span>
                    : <NavLink to={'login'} className={s.loginLink}>Login</NavLink>}
            </div>
         </header>
        </>
}