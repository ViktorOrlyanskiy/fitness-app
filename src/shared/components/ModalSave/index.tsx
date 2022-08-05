import { FC } from 'react';
import { useInput } from 'hooks/useInput';
import { useInputAutofocus } from 'hooks/useInputAutofocus';
import Modal from 'shared/components/ui/Modal';
import styles from './modal-save.module.scss';

interface ModalSaveProps {
    name: string;
    isOpen: boolean;
    setOpen: (arg1: boolean) => void;
    nameBtnAction?: string;
    handleBtnAction: (arg1: string) => void;
}

const ModalSave: FC<ModalSaveProps> = ({
    name,
    isOpen,
    setOpen,
    nameBtnAction = 'Сохранить',
    handleBtnAction,
}) => {
    const nameWorkout = useInput('', !isOpen);
    const inputRef = useInputAutofocus(isOpen);

    return (
        <Modal
            isOpen={isOpen}
            setOpen={setOpen}
            nameBtnAction={nameBtnAction}
            disableBtnAction={nameWorkout.value ? false : true}
            handleBtnAction={() => {
                handleBtnAction(nameWorkout.value.trim());
                setOpen(false);
            }}>
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
