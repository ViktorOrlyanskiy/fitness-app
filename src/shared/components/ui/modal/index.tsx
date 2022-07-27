import { FC, useRef } from 'react';
import './modal.scss';

interface ModalProps {
    active: boolean;
    setActive: (arg1: boolean) => void;
    children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ active, setActive, children }) => {
    const modalRef = useRef(null);

    return (
        <div
            ref={modalRef}
            className={active ? 'modal active' : 'modal'}
            onClick={() => setActive(false)}>
            <div
                className={active ? 'modal__content active' : 'modal__content'}
                onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};