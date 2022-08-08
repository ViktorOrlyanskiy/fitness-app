import { FC, useEffect } from 'react';
import styles from './background-modal.module.scss';

export const BackgroundModal: FC<{ active: boolean }> = ({ active }) => {
    useEffect(() => {
        const body = document.querySelector('body');
        if (active) {
            body?.classList.add(styles['not-scroll']);
        } else {
            body?.classList.remove(styles['not-scroll']);
        }
    }, [active]);
    return (
        <div
            className={
                active ? `${styles.modal} ${styles.active}` : styles.modal
            }></div>
    );
};
