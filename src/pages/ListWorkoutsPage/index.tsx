import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelectors } from 'hooks/useRedux';
import { useFirestore } from 'hooks/useFirestore';
import { clear_list_exercises } from 'store/slices/listExercises';
import { save_name } from 'store/slices/currentWorkout';

import Header from 'shared/components/Header';
import Workout from './components/Workout';
import ModalSave from 'shared/components/ModalSave';

import { URL } from 'shared/constants/URL';
import './list-workouts.scss';

const ListWorkouts: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { getAllWorkouts } = useFirestore();
    const { currentWorkout, listWorkouts, listExercises } = useAppSelectors();
    const [isModalNameWorkout, setModalNameWorkout] = useState<boolean>(false);

    const startWorkout = () => {
        setModalNameWorkout(true);
    };

    const goToCurrentWorkout = () => {
        navigate(URL.current_workout);
    };

    const handlerNameWorkout = (value: string) => {
        dispatch(save_name(value));
        setTimeout(() => {
            navigate(URL.exercises_storage);
        }, 500);
    };

    // очищает listExercises если прервалось создание тренировки
    useEffect(() => {
        if (!currentWorkout.id && listExercises.length > 0) {
            dispatch(clear_list_exercises());
        }
    });

    // получает listWorkouts из БД и сохраняет их в store
    useEffect(() => {
        getAllWorkouts();
    });

    return (
        <div className="list-workouts">
            <Header
                previousPage={URL.base}
                btnLeft={'bars'}
                btnRight={listExercises.length > 0 ? 'angles-right' : 'plus'}
                btnEvent={
                    listExercises.length > 0 ? goToCurrentWorkout : startWorkout
                }
                children={'Список тренировок'}
            />
            <div className="page-container">
                {listWorkouts.length > 0 &&
                    [...listWorkouts]
                        .sort((a, b) => b.id - a.id)
                        .map((workout) => (
                            <Workout key={workout.id} {...workout} />
                        ))}
            </div>

            <ModalSave
                name="Название тренировки"
                active={isModalNameWorkout}
                setActive={setModalNameWorkout}
                handlerSaveBtn={handlerNameWorkout}
            />
        </div>
    );
};

export default ListWorkouts;
