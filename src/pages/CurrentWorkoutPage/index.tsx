import { FC } from 'react';
import { useAppSelectors } from 'hooks/useRedux';
import { URL } from 'shared/constants/URL';
import HeaderWorkout from './components/HeaderWorkout';
import Set from './components/Set';
import './current-workout.scss';
import { ButtonAction } from 'shared/components/ButtonAction';
import { useNavigate } from 'react-router-dom';

const CurrentWorkout: FC = () => {
    const navigate = useNavigate();
    const { listExercises } = useAppSelectors();
    const activeExercise = listExercises.filter(
        (exercise) => exercise.isActive
    )[0];
    const sets = activeExercise?.sets;

    return (
        <div className="current-workout">
            <HeaderWorkout name={activeExercise.name} />
            <div className="page-container">
                {sets &&
                    sets.map((set, index) => (
                        <Set key={set.id} index={++index} {...set} />
                    ))}
            </div>
            <ButtonAction
                className="current-workout__button"
                handleClick={() => navigate(URL.form_add_set)}>
                Новый подход
            </ButtonAction>
        </div>
    );
};

export default CurrentWorkout;
