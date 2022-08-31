import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelectors } from 'hooks/useRedux';
import { _set_workout } from 'store/actions';
import { clear_list_exercises } from 'store/reducers/listExercises';
import { set_is_fetch_workouts } from 'store/reducers/fetch';
import {
    clear_current_workout,
    save_name,
} from 'store/reducers/currentWorkout';

import { IWorkout } from 'shared/models';
import { URL } from 'shared/constants/URL';
import Header from 'shared/components/Header';
import ModalSave from 'shared/components/ModalSave';
import Modal from 'shared/components/ui/Modal/Modal';
import { ProgressBar } from '../ProgressBar';
import SelectExercise from '../SelectExercise';
import './header-workout.scss';

const HeaderWorkout: FC<{ name: string }> = ({ name }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { user, currentWorkout, listExercises } = useAppSelectors();
    const [isModalNameWorkout, setModalNameWorkout] = useState(false);
    const [isModalFinish, setModalFinish] = useState(false);

    const handleNameWorkout = (value: string) => {
        dispatch(save_name(value));
    };

    const handleFinish = () => {
        setModalFinish(true);
    };

    const finishWorkout = () => {
        if (currentWorkout.id) {
            const workout: IWorkout = {
                id: currentWorkout.id,
                name: currentWorkout.name,
                date: currentWorkout.date,
                time: '0',
                isScheduled: false,
                listExercises: listExercises.filter(
                    (exercise) => exercise.sets.length > 0
                ),
            };

            if (user.uid) {
                dispatch(_set_workout({ userId: user.uid, workout }));
                dispatch(set_is_fetch_workouts(true));
                dispatch(clear_list_exercises());
                dispatch(clear_current_workout());
                navigate(URL.list_workouts);
            }
        }
    };

    return (
        <div className="current-workout__header">
            <Header
                previousPage={URL.list_workouts}
                btnRight={'check'}
                handleBtnRight={handleFinish}
                handleClickTitle={() => setModalNameWorkout(true)}
                children={currentWorkout.name}
            />
            <SelectExercise name={name} />
            <ProgressBar />
            <ModalSave
                name="Название тренировки"
                isOpen={isModalNameWorkout}
                setOpen={setModalNameWorkout}
                handleBtnAction={handleNameWorkout}
            />
            <Modal
                isOpen={isModalFinish}
                setOpen={setModalFinish}
                nameBtnAction="Да"
                handleBtnAction={finishWorkout}>
                <h3>Завершить тренировку?</h3>
            </Modal>
        </div>
    );
};
export default HeaderWorkout;
