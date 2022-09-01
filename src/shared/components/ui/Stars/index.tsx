import { FC } from 'react';
import { SvgGenerator, variant } from '../SvgGenerator';
import styles from './stars.module.scss';

interface StarsProps {
    type: string;
}

export const Stars: FC<StarsProps> = ({ type }) => {
    let countStars = 1;

    if (type === 'basic') {
        countStars = 3;
    } else if (type === 'auxiliary') {
        countStars = 2;
    }

    return (
        <div className={styles['wrapper']}>
            {[...Array(countStars)].map((_, i) => (
                <SvgGenerator key={i} id={variant.star} />
            ))}
        </div>
    );
};
