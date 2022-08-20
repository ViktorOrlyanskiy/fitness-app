import { FC } from 'react';
import styles from './button-action.module.scss';
import MyButton from '../ui/MyButton';

interface ButtonActionProps {
    handleClick: () => void;
    className?: string;
    children: React.ReactNode;
}

export const ButtonAction: FC<ButtonActionProps> = ({
    handleClick,
    className,
    children,
}) => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <MyButton onClick={handleClick}>{children}</MyButton>
        </div>
    );
};
