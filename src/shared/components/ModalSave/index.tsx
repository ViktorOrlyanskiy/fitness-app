import { FC, useEffect, useRef } from 'react';
import Modal from 'shared/components/ui/Modal';
import { useInput } from 'hooks/useInput';
import styles from './modal-save.module.scss';
import { useInputAutofocus } from 'hooks/useInputAutofocus';

interface ModalSaveProps {
    name: string;
    active: boolean;
    setActive: (arg1: boolean) => void;
    nameBtn?: string;
    handleSaveBtn: (arg1: string) => void;
}

const ModalSave: FC<ModalSaveProps> = ({
    name,
    active,
    setActive,
    nameBtn = 'Сохранить',
    handleSaveBtn,
}) => {
    const nameWorkout = useInput('', !active);
    const inputRef = useInputAutofocus(active);

    const handleBtnActive = () => {
        handleSaveBtn(nameWorkout.value);
        setActive(false);
    };

    return (
        <Modal
            active={active}
            setActive={setActive}
            nameBtnActive={nameBtn}
            disabledBtnActive={nameWorkout.value ? false : true}
            handleBtnActive={handleBtnActive}>
            <div className={styles.modal}>
                <div className={styles.title}>{name}</div>
                <input
                    ref={inputRef}
                    type="text"
                    className={styles.input}
                    {...nameWorkout}
                />
            </div>
        </Modal>
    );
};
export default ModalSave;
