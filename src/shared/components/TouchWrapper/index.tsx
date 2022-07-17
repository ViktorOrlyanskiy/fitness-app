import React, { FC, useState } from 'react';
import styles from './TouchWrapper.module.scss';

interface TouchWrapperProps {
    front: React.ReactNode;
    back: React.ReactNode;
    scheduled: boolean;
}

const TouchWrapper: FC<TouchWrapperProps> = ({ front, back, scheduled }) => {
    const [isMovedLeft, setMovedLeft] = useState<boolean>(false);
    const [leftOffset, setLeftOffset] = useState<number>(0);
    const [startX, setStartX] = useState<number | null>(null);

    const handlerTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setStartX(e.touches[0].pageX);
    };
    const handlerTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        let endX = e.touches[0].pageX;
        // определяет направление смещения
        if (startX && startX > endX && startX - endX > 50) {
            setMovedLeft(true);

            setLeftOffset(scheduled ? -126 : -84);
        }
        if (startX && startX < endX && startX - endX > -50) {
            setMovedLeft(false);
            setLeftOffset(0);
        }
    };
    const handlerTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        setStartX(null);
    };

    return (
        <div
            className={styles.wrapper}
            onTouchStart={handlerTouchStart}
            onTouchMove={handlerTouchMove}
            onTouchEnd={handlerTouchEnd}>
            <div
                style={{ left: leftOffset }}
                className={
                    isMovedLeft ? styles.front_moved_left : styles.front
                }>
                {front}
            </div>
            <div className={isMovedLeft ? styles.back_active : styles.back}>
                {back}
            </div>
        </div>
    );
};
export default TouchWrapper;
