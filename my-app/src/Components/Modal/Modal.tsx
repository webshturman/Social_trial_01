import React, {useEffect, useMemo} from 'react';
import s from './Modal.module.css'
import {createPortal} from "react-dom";


type ModalType = {
    open: boolean;
    onClose: () => void
};
const modalElement = document.querySelector('#modal')

export const Modal: React.FC<ModalType> = ({
                                               children,
                                               open,
                                               onClose
                                           }) => {
    const element = useMemo(() => document.createElement('div'), [])
    useEffect(() => {
        if (modalElement) {
            if (open) {
                modalElement.appendChild(element)

                return () => {
                    modalElement.removeChild(element)
                }
            }
        }
    })

    if (open) {
        return createPortal(
            <div className={s.wrapper}>
                <div className={s.body}>
                    {children}
                    <div className={s.close} onClick={onClose}>X</div>
                </div>
            </div>, element
        );
    }
    return null

};
