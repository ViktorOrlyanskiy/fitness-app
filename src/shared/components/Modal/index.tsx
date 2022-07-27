import React, { FC, useRef } from 'react';
import { useOutsideClick } from 'shared/hooks/useOutsideClick';
import styles from './modal.module.scss';

interface IModalProps {
    active: boolean;
    setActive: (arg1: boolean) => void;
    btnActive?: boolean;
    nameBtnActive?: string;
    children: React.ReactNode;
}

const Modal: FC<IModalProps> = ({
    active,
    setActive,
    btnActive,
    nameBtnActive = 'Ок',
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
            {btnActive && (
                <button className={styles.btn}>{nameBtnActive}</button>
            )}
            <button className={styles.btn} onClick={() => setActive(false)}>
                Отмена
            </button>
        </div>
    );
};
export default Modal;
