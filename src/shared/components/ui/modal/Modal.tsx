import React, { FC, useRef } from 'react';
import { useOutsideClick } from 'hooks/useOutsideClick';
import styles from './modal.module.scss';

interface IModalProps {
    isOpen: boolean;
    setOpen: (arg1: boolean) => void;
    nameBtnAction?: string;
    handleBtnAction?: () => void;
    children: React.ReactNode;
}

const Modal: FC<IModalProps> = ({
    isOpen,
    setOpen,
    nameBtnAction,
    handleBtnAction,
    children,
}) => {
    const modalRef = useRef<any>(null);
    useOutsideClick(modalRef, isOpen, setOpen);

    return (
        <div
            ref={modalRef}
            className={
                isOpen ? `${styles.modal} ${styles.active}` : styles.modal
            }>
            <div className={styles.body}>{children}</div>
            <div className={styles.buttons}>
                <button className={styles.btn} onClick={() => setOpen(false)}>
                    Отмена
                </button>
                {nameBtnAction && (
                    <button className={styles.btn} onClick={handleBtnAction}>
                        {nameBtnAction}
                    </button>
                )}
            </div>
        </div>
    );
};
export default Modal;
