import { FC } from 'react';
import { SvgGenerator, variant } from '../ui/SvgGenerator';
import styles from './button-back.module.scss';

interface ButtonBackProps {
    isSet?: boolean;
    handlerPlay?: () => void;
    handlerCopy?: () => void;
    handlerEdit?: () => void;
    handlerDelete?: () => void;
}

const ButtonBack: FC<ButtonBackProps> = ({
    isSet,
    handlerPlay,
    handlerCopy,
    handlerEdit,
    handlerDelete,
}) => {
    return (
        <div
            className={
                isSet ? styles['button-back-set'] : styles['button-back']
            }>
            {handlerPlay && (
                <div className={styles.play} onClick={handlerPlay}>
                    <SvgGenerator id={variant.play} />
                </div>
            )}
            {handlerCopy && (
                <div className={styles.copy} onClick={handlerCopy}>
                    <SvgGenerator id={variant.copy} />
                </div>
            )}
            {handlerEdit && (
                <div className={styles.edit} onClick={handlerEdit}>
                    <SvgGenerator id={variant.pencil_light} />
                </div>
            )}
            {handlerDelete && (
                <div className={styles.delete} onClick={handlerDelete}>
                    <SvgGenerator id={variant.trash_xmart} />
                </div>
            )}
        </div>
    );
};
export default ButtonBack;
