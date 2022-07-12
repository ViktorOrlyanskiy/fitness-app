import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { useAppSelectors } from 'hooks/useAppSelectors';
import { create_id } from 'store/slices/currentWorkout';

import Header from 'component/Header/Header';
import Footer from 'component/Footer/Footer';
import Exercise from './components/Exercise/Exercise';
import ExerciseActive from './components/ExerciseActive/ExerciseActive';

import './styles/ListExercises.scss';

const ListExercises: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [isActive, setActive] = useState<boolean>(false);
    const { listExercises, currentWorkout } = useAppSelectors();

    const handlerBtnHeader = () => {
        if (!currentWorkout.id && listExercises.length > 0) {
            dispatch(create_id());
            navigate('/current-workout');
        }
    };

    return (
        <div className="list-exercises">
            {currentWorkout.id ? (
                <Header
                    previousPage={'/current-workout'}
                    btnRight={'pencil'}
                    btnEvent={() =>
                        isActive ? setActive(false) : setActive(true)
                    }
                    children={'Список упражнений'}
                />
            ) : (
                <Header
                    previousPage={'/list-workouts'}
                    btnRight={'Начать'}
                    btnEvent={handlerBtnHeader}
                    children={'Список упражнений'}
                />
            )}

            <div className="list-exercise__body">
                {listExercises.length === 0 && (
                    <div className="notification-text">Добавьте упражения</div>
                )}

                {listExercises.length > 0 &&
                    (isActive
                        ? listExercises.map((exercise) => (
                              <ExerciseActive key={exercise.id} {...exercise} />
                          ))
                        : listExercises.map((exercise) => (
                              <Exercise key={exercise.id} {...exercise} />
                          )))}
            </div>

            <Footer nextPage={'add-exercise'}>Добавить упражение</Footer>
        </div>
    );
};
export default ListExercises;
