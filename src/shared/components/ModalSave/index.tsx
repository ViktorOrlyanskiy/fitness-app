import { FC, useEffect, useState } from 'react';
import Modal from 'shared/components/ui/Modal';
import { useInput } from 'shared/hooks/useInput';
import styles from './modal-save.module.scss';

interface ModalSaveProps {
    name: string;
    active: boolean;
    setActive: (arg1: boolean) => void;
    nameBtn?: string;
    handlerSaveBtn: (arg1: string) => void;
}

const ModalSave: FC<ModalSaveProps> = ({
    name,
    active,
    setActive,
    nameBtn = 'Сохранить',
    handlerSaveBtn,
}) => {
    const nameWorkout = useInput('', !active);

    const handlerBtnActive = () => {
        handlerSaveBtn(nameWorkout.value);
        setActive(false);
    };

    return (
        <Modal
            active={active}
            setActive={setActive}
            nameBtnActive={nameBtn}
            handlerBtnActive={handlerBtnActive}>
            <div className={styles.modal}>
                <div className={styles.title}>{name}</div>
                <input type="text" className={styles.input} {...nameWorkout} />
            </div>
        </Modal>
    );
};
export default ModalSave;
