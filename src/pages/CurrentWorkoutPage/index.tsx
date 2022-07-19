import { FC } from 'react';
import { useAppSelectors } from 'hooks/useRedux';

import Footer from 'shared/components/Footer';
import HeaderWorkout from './components/HeaderWorkout/HeaderWorkout';
import Set from './components/Set/Set';

import './styles/CurrentWorkout.scss';

const CurrentWorkout: FC = () => {
    const { listExercises } = useAppSelectors();
    const activeExercise = listExercises.filter(
        (exercise) => exercise.isActive
    )[0];
    const sets = activeExercise?.sets;

    return (
        <div className="current-workout">
            <HeaderWorkout
                name={
                    activeExercise ? activeExercise.name : 'Добавить упражение'
                }
            />
            {sets &&
                sets.length > 0 &&
                sets.map((set, index) => (
                    <Set key={set.id} index={++index} {...set} />
                ))}
            <Footer nextPage={'add-set'}>Добавить подход</Footer>
        </div>
    );
};

export default CurrentWorkout;
