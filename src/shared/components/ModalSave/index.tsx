import { FC, useEffect, useRef } from 'react';
import Modal from 'shared/components/ui/Modal';
import { useInput } from 'hooks/useInput';
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
    const inputRef = useRef<HTMLInputElement>(null);

    const handlerBtnActive = () => {
        if (nameWorkout.value) {
            handlerSaveBtn(nameWorkout.value);
            setActive(false);
        }
    };

    useEffect(() => {
        if (active) inputRef?.current?.focus();
    }, [active]);

    return (
        <Modal
            active={active}
            setActive={setActive}
            nameBtnActive={nameBtn}
            disabledBtnActive={nameWorkout.value ? false : true}
            handlerBtnActive={handlerBtnActive}>
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
