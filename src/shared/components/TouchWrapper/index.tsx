import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { set_offset } from 'store/slices/touchWrapper';
import styles from './TouchWrapper.module.scss';

interface TouchWrapperProps {
    id: number;
    front: React.ReactNode;
    back: React.ReactNode;
    offset: number;
}

const TouchWrapper: FC<TouchWrapperProps> = ({ id, front, back, offset }) => {
    const dispatch = useAppDispatch();
    const offsetID = useAppSelector((state) => state.touchWrapper);
    const [leftOffset, setLeftOffset] = useState<number>(0);
    const [startX, setStartX] = useState<number | null>(null);

    const handlerTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setStartX(e.touches[0].pageX);
    };
    const handlerTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        let endX = e.touches[0].pageX;
        // определяет направление смещения
        if (startX && startX > endX && startX - endX > 50) {
            setLeftOffset(offset);
            dispatch(set_offset(id));
        }
        if (startX && startX < endX && startX - endX > -50) {
            setLeftOffset(0);
        }
    };

    const handlerTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        setStartX(null);
    };

    // возвращает в начальное состояние если открывается новая тренировка
    useEffect(() => {
        if (id !== offsetID) setLeftOffset(0);
    }, [offsetID]);

    return (
        <div
            className={styles.wrapper}
            onTouchStart={handlerTouchStart}
            onTouchMove={handlerTouchMove}
            onTouchEnd={handlerTouchEnd}>
            <div style={{ left: leftOffset }} className={styles.front}>
                {front}
            </div>
            <div className={styles.back}>{back}</div>
        </div>
    );
};
export default TouchWrapper;
