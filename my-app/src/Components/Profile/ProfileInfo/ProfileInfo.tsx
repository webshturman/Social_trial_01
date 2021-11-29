import s from "../Profile.module.css";
import React from "react";
import {ProfileInfoType} from "../Profile";
import {LinearProgress} from "@material-ui/core";
import {ProfileStatus} from "./ProfileStatus";


export const ProfileInfo:React.FC<ProfileInfoType> = ({profile}) => {
    if(!profile){
        return <LinearProgress/>
    }
    return (
        <div>
            <div className={s.background}></div>
            <div className={s.info}>
                <div>
                    {/*@ts-ignore*/}
                    <img src={profile.photos.large} alt=""/>
                </div>
                <div>
                    <div className={s.name}>{profile.fullName}</div>
                    <div>{profile.aboutMe}</div>
                    <ProfileStatus/>
                </div>
            </div>
        </div>
    )
}


// export const ProfileInfo:React.FC<ProfileInfoType> = ({profile}) => {
//     return (
//         <div>
//             <div className={s.background}></div>
//             <div className={s.info}>
//                 <div>
//                     <img src="https://cdnimg.rg.ru/img/content/165/89/88/kinopoisk.ru-Shrek-2-644132_d_850.jpg" alt=""/>
//                 </div>
//                 <div className={s.name}>
//                     Kirill Zarya
//                 </div>
//             </div>
//         </div>
//     )
// }