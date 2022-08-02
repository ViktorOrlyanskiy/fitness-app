import { FC } from 'react';
import { IGroupExercises } from 'shared/types';
import Exercise from '../Exercise';
import styles from './group.module.scss';

interface GroupProps extends IGroupExercises {
    handlerClickExercise: (name: string, isActive: boolean) => void;
}

const Group: FC<GroupProps> = ({ name, list, handlerClickExercise }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{name}</div>
            <ul className={styles.list}>
                {list.map((exercise) => (
                    <Exercise
                        key={exercise.id}
                        {...exercise}
                        handlerClickExercise={handlerClickExercise}
                    />
                ))}
            </ul>
        </div>
    );
};
export default Group;
