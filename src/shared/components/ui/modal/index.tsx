import React, { FC, useRef } from 'react';
import { useOutsideClick } from 'hooks/useOutsideClick';
import styles from './modal.module.scss';

interface IModalProps {
    isOpen: boolean;
    setOpen: (arg1: boolean) => void;
    nameBtnAction?: string;
    disableBtnAction?: boolean;
    handleBtnAction?: () => void;
    btnAction?: React.ReactNode;
    children: React.ReactNode;
}

const Modal: FC<IModalProps> = ({
    isOpen,
    setOpen,
    nameBtnAction,
    disableBtnAction,
    handleBtnAction,
    btnAction,
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
            {nameBtnAction && (
                <button
                    className={styles.btn}
                    onClick={handleBtnAction}
                    disabled={disableBtnAction}>
                    {nameBtnAction}
                </button>
            )}
            <button className={styles.btn} onClick={() => setOpen(false)}>
                Отмена
            </button>
        </div>
    );
};
export default Modal;
