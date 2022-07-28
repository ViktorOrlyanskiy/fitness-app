import React, { FC, useRef } from 'react';
import { useOutsideClick } from 'hooks/useOutsideClick';
import styles from './modal.module.scss';

interface IModalProps {
    active: boolean;
    setActive: (arg1: boolean) => void;
    nameBtnActive?: string;
    handlerBtnActive?: () => void;
    children: React.ReactNode;
}

const Modal: FC<IModalProps> = ({
    active,
    setActive,
    nameBtnActive,
    handlerBtnActive,
    children,
}) => {
    const modalRef = useRef<any>(null);
    useOutsideClick(modalRef, active, setActive);

    return (
        <div
            ref={modalRef}
            className={
                active ? `${styles.modal} ${styles.active}` : styles.modal
            }>
            <div className={styles.body}>{children}</div>
            {!!nameBtnActive && (
                <button className={styles.btn} onClick={handlerBtnActive}>
                    {nameBtnActive}
                </button>
            )}
            <button className={styles.btn} onClick={() => setActive(false)}>
                Отмена
            </button>
        </div>
    );
};
export default Modal;
