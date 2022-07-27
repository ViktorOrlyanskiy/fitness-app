import { FC, useState } from 'react';
import Modal from 'shared/components/Modal';
import styles from './modal-save.scss';

interface ModalSaveProps {
    name: string;
    active: boolean;
    setActive: (arg1: boolean) => void;
    handlerSaveBtn: (arg1: string) => void;
}

const ModalSave: FC<ModalSaveProps> = ({
    name,
    active,
    setActive,
    handlerSaveBtn,
}) => {
    const [value, setValue] = useState<string>('');

    return (
        <Modal active={active} setActive={setActive}>
            <div className="modal-save">
                <div className="modal-save__title">{name}</div>
                <input
                    type="text"
                    className="modal-save__input"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </Modal>
    );
};
export default ModalSave;
