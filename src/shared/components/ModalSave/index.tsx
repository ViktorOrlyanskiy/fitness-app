import { FC, useState } from 'react';
import { Modal } from 'shared/components/ui/Modal';
import './modal-save.scss';

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
                    onChange={e => setValue(e.target.value)}
                />
                <div className="modal-save__row">
                    <button
                        className="modal-save__btn"
                        onClick={() => setActive(false)}>
                        Отмена
                    </button>
                    <button
                        className="modal-save__btn"
                        onClick={() => {
                            handlerSaveBtn(value);
                            setValue('');
                            setActive(false);
                        }}>
                        Сохранить
                    </button>
                </div>
            </div>
        </Modal>
    );
};
export default ModalSave;
