import { FC } from 'react';
import { IGroupExercises } from 'shared/models';
import Exercise from '../Exercise';
import styles from './group.module.scss';

interface GroupProps {
    group: IGroupExercises;
    handleClickExercise: (name: string, isActive: boolean) => void;
}

const Group: FC<GroupProps> = ({ group, handleClickExercise }) => {
    const { name, list } = group;

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{name}</div>
            <ul className={styles.list}>
                {list.map((exercise) => (
                    <Exercise
                        key={exercise.id}
                        group={group}
                        {...exercise}
                        handleClickExercise={handleClickExercise}
                    />
                ))}
            </ul>
        </div>
    );
};
export default Group;
