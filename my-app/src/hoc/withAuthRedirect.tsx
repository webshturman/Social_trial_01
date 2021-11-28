import { Navigate } from "react-router-dom"



export const withAuthRedirect =(Component:any)=>{
    // if(!isAuth) return <Navigate to={'/login'}/>
    const RedirectComponent=(props:any)=>{
        return <Component {...props}/>
    }
    return RedirectComponent
}