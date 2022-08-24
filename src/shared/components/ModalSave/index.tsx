import React, { FC, useRef } from 'react';
import { useInput } from 'hooks/useInput';
import { useOutsideClick } from 'hooks/useOutsideClick';
import ModalForm from 'shared/components/ui/Modal/ModalForm';
import styles from './modal-save.module.scss';

interface ModalSaveProps {
    name: string;
    isOpen: boolean;
    setOpen: (arg1: boolean) => void;
    handleBtnAction: (arg1: string) => void;
}
 
const ModalSave: FC<ModalSaveProps> = ({
    name,
    isOpen,
    setOpen,
    handleBtnAction,
}) => {
    const nameWorkout = useInput('', !isOpen);
    const modalRef = useRef<any>(null);
    useOutsideClick(modalRef, isOpen, setOpen);

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        handleBtnAction(nameWorkout.value.trim());
        setOpen(false);
    };

    const handleReset = () => {
        setOpen(false);
    };

    return (
        <ModalForm
            modalRef={modalRef}
            isOpen={isOpen}
            isDisabledBtn={nameWorkout.value ? false : true}
            handleSubmit={handleSubmit}
            handleReset={handleReset}>
            <div className={styles.title}>{name}</div>
            <input className={styles.input} {...nameWorkout} />
        </ModalForm>
    );
};
export default ModalSave;
