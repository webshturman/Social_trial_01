import React, {Suspense, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import {NavBar} from "./Components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {AuthDataConnector} from "./Components/Header/HeaderContainer";
import {AppRootStateType} from "./Components/redux/store";
import {toBeAuthorized} from "./Components/redux/thunks/auth-thunks";
import {Loading} from "./utils/Loading";

const Login = React.lazy(() => import("./Components/Login/Login"));
const Profile = React.lazy(() => import("./Components/Profile/Profile"));
const UsersContainer = React.lazy(() => import("./Components/Users/UsersContainer"));
const Dialogs = React.lazy(() => import("./Components/Dialogs/Dialogs"));


export const App = () => {
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.loader.isInitialized)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(toBeAuthorized())
    }, [isAuth])

    if (!isInitialized) {
        return <Loading/>
    }

    return (
        <div className={'app-wrapper'}>
            <AuthDataConnector/>
            <NavBar/>
            <div className={'content'}>
                <Suspense fallback={<Loading/>}>
                    <Routes>
                        <Route path={'/'} element={<Profile/>}/>
                        <Route path={'/profile/:userId'} element={<Profile/>}/>
                        <Route path={'/profile'} element={<Profile/>}/>
                        <Route path={'/dialogs'} element={<Dialogs/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                        <Route path={'/users'} element={<UsersContainer/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                        <Route path={'/Social_trial_01'} element={<Profile/>}/>
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
}


//------------------------------------------------------------------------------------
// class AppContainer extends React.Component<PropsType, AppRootStateType> {
//
//     componentDidMount() {
//         this.props.toBeAuthorized()
//     };
//
//     render() {
//         if (!this.props.isInitialized) {
//             return <div
//                 style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
//                 <CircularProgress/>
//             </div>
//         }
//         return (
//             <div className={'app-wrapper'}>
//                 <AuthDataConnector/>
//                 <NavBar/>
//                 <div className={'content'}>
//                     <Routes>
//                         <Route path={'/'} element={<ProfileConnector/>}/>
//                         <Route path={'/profile/:userId'} element={<ProfileConnector/>}/>
//                         <Route path={'/profile'} element={<ProfileConnector/>}/>
//                         <Route path={'/dialogs'} element={<Dialogs/>}/>
//                         <Route path={'/news'} element={<News/>}/>
//                         <Route path={'/music'} element={<Music/>}/>
//                         <Route path={'/settings'} element={<Settings/>}/>
//                         <Route path={'/users'} element={<UsersContainer/>}/>
//                         <Route path={'/login'} element={<Login/>}/>
//                         <Route path={'/Social_trial_01'} element={<ProfileConnector/>}/>
//                     </Routes>
//                 </div>
//             </div>
//         );
//     }
// }
//
//
// const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
//     return {
//         isInitialized: state.loader.isInitialized
//     }
// }
//
// const withRouter = (WrappedComponent: any) => (props: any) => {
//     const {userId} = useParams();
//     return (
//         <WrappedComponent userId={userId} {...props}/>
//     );
// };
//
// const withUrlData = withRouter(AppContainer);
// export const App = connect(mapStateToProps,
//     {toBeAuthorized})(withUrlData)
//
//
// export type mapStateToPropsType = {
//     isInitialized: boolean
// }
//
// type mapDispatchPropsType = {
//     toBeAuthorized: () => void
//
// }
// type PathParamsType = {
//     userId: string | null
// }
//
// export type ProfileContainerType = mapDispatchPropsType & mapStateToPropsType
// export type PropsType = PathParamsType & ProfileContainerType





