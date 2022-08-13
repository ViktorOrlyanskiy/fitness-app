import { FC } from 'react';
import { SvgGenerator, variant } from '../ui/SvgGenerator';
import styles from './buttons-back.module.scss';

interface ButtonsBackProps {
    isSet?: boolean;
    handlePlay?: () => void;
    handleCopy?: () => void;
    handleEdit?: () => void;
    handleDelete?: () => void;
}

const ButtonsBack: FC<ButtonsBackProps> = ({
    isSet,
    handlePlay,
    handleCopy,
    handleEdit,
    handleDelete,
}) => {
    return (
        <div
            className={
                isSet ? styles['buttons-back-set'] : styles['buttons-back']
            }>
            {handlePlay && (
                <div className={styles.play} onClick={handlePlay}>
                    <SvgGenerator id={variant.play} />
                </div>
            )}
            {handleCopy && (
                <div className={styles.copy} onClick={handleCopy}>
                    <SvgGenerator id={variant.copy} />
                </div>
            )}
            {handleEdit && (
                <div className={styles.edit} onClick={handleEdit}>
                    <SvgGenerator id={variant.pencil_light} />
                </div>
            )}
            {handleDelete && (
                <div className={styles.delete} onClick={handleDelete}>
                    <SvgGenerator id={variant.trash_xmart} />
                </div>
            )}
        </div>
    );
};
export default ButtonsBack;
