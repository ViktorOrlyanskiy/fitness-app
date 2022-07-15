import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { useAppSelectors } from 'hooks/useAppSelectors';
import { clear_list_exercises } from 'store/slices/listExercises';
import { save_name } from 'store/slices/currentWorkout';
import { useFirestore } from 'hooks/useFirestore';

import Header from 'component/Header/Header';
import Workout from './components/Workout';
import ModalSave from 'component/ModalSave/ModalSave';
import './styles/ListWorkouts.scss';

const ListWorkouts: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { getAllWorkouts } = useFirestore();
    const { currentWorkout, listWorkouts, listExercises } = useAppSelectors();
    const [modalActive, setModalActive] = useState<boolean>(false);

    const startWorkout = () => {
        setModalActive(true);
    };

    const goToCurrentWorkout = () => {
        navigate('/current-workout');
    };

    const handlerSaveBtn = (value: string) => {
        dispatch(save_name(value));
        setTimeout(() => {
            navigate('/list-exercises');
        }, 500);
    };

    // очищает listExercises если прервалось создание тренировки
    useEffect(() => {
        if (!currentWorkout.id && listExercises.length > 0) {
            dispatch(clear_list_exercises());
        }
    });

    useEffect(() => {
        getAllWorkouts();
    });

    return (
        <div className="list-workouts">
            <Header
                previousPage={'/'}
                btnLeft={'bars'}
                btnRight={listExercises.length > 0 ? 'angles-right' : 'plus'}
                btnEvent={
                    listExercises.length > 0 ? goToCurrentWorkout : startWorkout
                }
                children={'Список тренировок'}
            />
            <div className="list-workouts__body">
                {listWorkouts.length > 0 &&
                    listWorkouts.map((workout) => (
                        <Workout key={workout.id} {...workout} />
                    ))}
            </div>
            <ModalSave
                name="Название тренировки"
                active={modalActive}
                setActive={setModalActive}
                handlerSaveBtn={handlerSaveBtn}
            />
        </div>
    );
};

export default ListWorkouts;
