import React, { FC } from 'react';
import { useInput } from 'hooks/useInput';
import { useInputAutofocus } from 'hooks/useInputAutofocus';
import ModalForm from 'shared/components/ui/Modal/ModalForm';
import styles from './modal-save.module.scss';
import { MyInputFocus } from '../ui/MyInput';

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
    const inputRef = useInputAutofocus(isOpen);

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
            isOpen={isOpen}
            setOpen={setOpen}
            isDisabledBtn={nameWorkout.value ? false : true}
            handleSubmit={handleSubmit}
            handleReset={handleReset}>
            <div className={styles.title}>{name}</div>
            <MyInputFocus
                inputRef={inputRef}
                label=""
                type="text"
                className={styles.input}
                {...nameWorkout}
            />
        </ModalForm>
    );
};
export default ModalSave;
