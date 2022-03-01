import s from "../Profile.module.css";
import React, {ChangeEvent, useState} from "react";
import {ProfileStatus} from "./ProfileStatus";
import {AppRootStateType} from "../../redux/store";
import {ProfileType} from "../../../api/types/userType";
import {useDispatch, useSelector} from "react-redux";
import { addAvatar } from "../../redux/thunks/profile-thunks";
import bear from '../../../assets/images/bear.png'
import { Modal } from "../../Modal/Modal";


export const ProfileInfo = () => {
    const profile = useSelector<AppRootStateType, ProfileType>(state => state.profile.profile as ProfileType)
    const userId = useSelector<AppRootStateType, number | string>(state => state.profile.profile!.userId)
    const authId = useSelector<AppRootStateType, string | null>(state => state.auth.id)
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const savePhoto=(e: ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files && e.target.files.length>0){
            dispatch(addAvatar(e.target.files[0]))
            setOpen(false)
        }
    }
    return (
        <div>
            <div className={s.background}></div>
            <div className={s.profileContainer}>
                <div className={s.photoBlock}>
                    <img src={profile.photos.large || bear} alt=""/>
                    {userId === authId &&
                    <div className={s.loadBlock} onClick={()=>setOpen(true)}>Upload photo</div>}
                </div>
                <div className={s.profileInfo}>
                    <div className={s.name}>{profile.fullName}</div>
                    <div>{profile.aboutMe}</div>
                    <ProfileStatus />
                </div>
            </div>
            <Modal open={open} onClose={()=> setOpen(false)}>
                <div>Download your new photo</div>
                <div>
                    <input type="file" onChange={savePhoto}/>
                </div>
            </Modal>
        </div>
    )
}

