import React, { FC, useState } from 'react';
import styles from './TouchWrapper.module.scss';

interface TouchWrapperProps {
    front: React.ReactNode;
    back: React.ReactNode;
}

const TouchWrapper: FC<TouchWrapperProps> = ({ front, back }) => {
    const [isMoved, setMoved] = useState<boolean>(false);
    const [startX, setStartX] = useState<number | null>(null);

    const handlerTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setStartX(e.touches[0].pageX);
    };
    const handlerTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        let endX = e.touches[0].pageX;
        // определяет направление смещения
        if (startX && startX > endX && startX - endX > 50) {
            setMoved(true);
            console.log('move left');
        }
        if (startX && startX < endX && startX - endX > -50) {
            setMoved(true);
            console.log('move right');
        }
    };
    const handlerTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        // setMoved(false);
        setStartX(null);
    };

    return (
        <div
            className={styles.wrapper}
            onTouchStart={handlerTouchStart}
            onTouchMove={handlerTouchMove}
            onTouchEnd={handlerTouchEnd}>
            <div className={isMoved ? styles.front_moved : styles.front}>
                {front}
            </div>
            <div className={isMoved ? styles.back_active : styles.back}>
                {back}
            </div>
        </div>
    );
};
export default TouchWrapper;
