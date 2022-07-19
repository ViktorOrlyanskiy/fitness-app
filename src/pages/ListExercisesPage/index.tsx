import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelectors } from 'hooks/useRedux';
import { create_id } from 'store/slices/currentWorkout';
import { URL } from 'shared/constants/URL';

import Header from 'shared/components/Header';
import Footer from 'shared/components/Footer';
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
            navigate(URL.current_workout);
        }
    };

    return (
        <div className="list-exercises">
            {currentWorkout.id ? (
                <Header
                    previousPage={URL.current_workout}
                    btnRight={'pencil'}
                    btnEvent={() =>
                        isActive ? setActive(false) : setActive(true)
                    }
                    children={'Список упражнений'}
                />
            ) : (
                <Header
                    previousPage={URL.list_workouts}
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

            <Footer nextPage={URL.add_exercise}>Добавить упражение</Footer>
        </div>
    );
};
export default ListExercises;
