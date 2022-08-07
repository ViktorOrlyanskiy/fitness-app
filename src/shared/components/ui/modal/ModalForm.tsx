import { FC, useRef } from 'react';
import { useOutsideClick } from 'hooks/useOutsideClick';
import styles from './modal.module.scss';

interface ModalFormProps {
    isOpen: boolean;
    setOpen: (arg1: boolean) => void;
    isDisabledBtn: boolean;
    handleSubmit: (arg?: any) => void;
    handleReset: () => void;
    children: React.ReactNode;
}

const ModalForm: FC<ModalFormProps> = ({
    isOpen,
    setOpen,
    isDisabledBtn,
    handleSubmit,
    handleReset,
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
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className={styles.body}>{children}</div>

                <button
                    type="submit"
                    disabled={isDisabledBtn}
                    className={styles.btn}>
                    Сохранить
                </button>
                <button
                    type="reset"
                    className={styles.btn}
                    onClick={handleReset}>
                    Отмена
                </button>
            </form>
        </div>
    );
};
export default ModalForm;
