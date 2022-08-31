import { FC } from 'react';
import { IExercise } from 'shared/models';
import { getTotalSets } from 'shared/helpers';
import styles from './set-history.module.scss';

interface SetHistoryProps {
    date?: string;
    exercise: IExercise;
}

export const SetHistory: FC<SetHistoryProps> = ({ date, exercise }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div>{date}</div>
                <div>Объем: {getTotalSets(exercise.sets)} кг</div>
            </div>
            <div className={styles.body}>
                <div className={styles.column}>
                    <div className={styles.item}>Вес</div>
                    <div className={styles.item}>Повторения</div>
                </div>
                {exercise.sets?.map((set) => (
                    <div key={set.id} className={styles.column}>
                        <div className={styles.item}>{set.weight}</div>
                        <div className={styles.item}>{set.amount}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
