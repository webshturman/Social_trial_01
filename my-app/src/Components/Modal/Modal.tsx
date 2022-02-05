import React from 'react';
import s from './Modal.module.css'


type ModalType = {
    open: boolean;
};

export const Modal: React.FC<ModalType> = ({ children, open }) => (
    <div>
        {open && (
            <div className={s.wrapper}>
                <div className={s.body}>
                    <div>{children}</div>
                </div>
            </div>
        )}
    </div>
);
