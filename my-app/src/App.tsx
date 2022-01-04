import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import {NavBar} from "./Components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {AuthDataConnector} from "./Components/Header/HeaderContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import {Login} from "./Components/Login/Login";
import CircularProgress from '@material-ui/core/CircularProgress';
import {AppRootStateType} from "./Components/redux/store";
import {ProfileConnector} from "./Components/Profile/ProfileContainer";
import {toBeAuthorized} from "./Components/redux/thunks/auth-thunks";


export const App = () => {
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.loader.isInitialized)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(toBeAuthorized())
    }, [])
    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }
    return (
        <div className={'app-wrapper'}>
            <AuthDataConnector/>
            <NavBar/>
            <div className={'content'}>
                <Routes>
                    <Route path={'/'} element={<ProfileConnector/>}/>
                    <Route path={'/profile/:userId'} element={<ProfileConnector/>}/>
                    <Route path={'/profile'} element={<ProfileConnector/>}/>
                    <Route path={'/dialogs'} element={<Dialogs/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                    <Route path={'/users'} element={<UsersContainer/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/Social_trial_01'} element={<ProfileConnector/>}/>
                </Routes>
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





