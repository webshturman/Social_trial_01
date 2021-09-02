import s from "../Profile.module.css";
import React from "react";

export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.background}>
            </div>
            <div className={s.info}>
                <div>
                    <img src="https://cdnimg.rg.ru/img/content/165/89/88/kinopoisk.ru-Shrek-2-644132_d_850.jpg" alt=""/>
                </div>
                <div className={s.name}>
                    Kirill Zarya
                </div>
            </div>
        </div>
    )
}
