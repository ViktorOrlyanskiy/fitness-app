import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelectors } from 'hooks/useRedux';
import { save_name } from 'store/reducers/currentWorkout';
import { _fetch_workouts } from 'store/actions';
import { set_is_fetch_workouts } from 'store/reducers/fetch';

import Header from 'shared/components/Header';
import Workout from './components/Workout';
import ModalSave from 'shared/components/ModalSave';
import { URL } from 'shared/constants/URL';
import './list-workouts.scss';
import Modal from 'shared/components/ui/Modal/Modal';

const ListWorkouts: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { user, fetch, listWorkouts, listExercises } = useAppSelectors();
    const [isModalNameWorkout, setModalNameWorkout] = useState(false);
    const [isModalRemoveWorkout, setModalRemoveWorkout] = useState(false);

    const startWorkout = () => {
        setModalNameWorkout(true);
    };

    const removeWorkout = () => {
        setModalRemoveWorkout(false);
    };

    const goToCurrentWorkout = () => {
        navigate(URL.current_workout);
    };

    const setNameWorkout = (value: string) => {
        dispatch(save_name(value));
        setTimeout(() => {
            navigate(URL.exercises_storage);
        }, 500);
    };

    // получает listWorkouts от сервера
    useEffect(() => {
        if (fetch.workouts) {
            if (user.uid) {
                dispatch(_fetch_workouts(user.uid));
                dispatch(set_is_fetch_workouts(false));
            }
        }
    }, [user.uid, dispatch, fetch.workouts]);

    return (
        <div className="list-workouts">
            <Header
                previousPage={URL.base}
                btnLeft={'bars'}
                btnRight={listExercises.length > 0 ? 'angles-right' : 'plus'}
                handleBtnRight={
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
                isOpen={isModalNameWorkout}
                setOpen={setModalNameWorkout}
                handleBtnAction={setNameWorkout}
            />
            <Modal
                isOpen={isModalRemoveWorkout}
                setOpen={setModalRemoveWorkout}
                nameBtnAction="Да"
                handleBtnAction={removeWorkout}>
                <h3>Удалить тренировку?</h3>
            </Modal>
        </div>
    );
};

export default ListWorkouts;
