import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelectors } from 'hooks/useRedux';
import { useFirestore } from 'hooks/useFirestore';
import { add_workout } from 'store/reducers/listWorkouts';
import { clear_list_exercises } from 'store/reducers/listExercises';
import {
    clear_current_workout,
    save_name,
} from 'store/reducers/currentWorkout';

import { IWorkout } from 'shared/types';
import { URL } from 'shared/constants/URL';
import Header from 'shared/components/Header';
import ModalSave from 'shared/components/ModalSave';
import SelectExercise from '../SelectExercise';
import './header-workout.scss';
import { is } from 'immer/dist/internal';
import Modal from 'shared/components/ui/Modal';

const HeaderWorkout: FC<{ name: string }> = ({ name }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { saveNewWorkout } = useFirestore();
    const { currentWorkout, listExercises } = useAppSelectors();

    const [isModalNameWorkout, setModalNameWorkout] = useState<boolean>(false);
    const [isModalFinish, setModalFinish] = useState<boolean>(false);

    const handlerNameWorkout = (value: string) => {
        dispatch(save_name(value));
    };

    const handlerFinish = () => {
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
                listExercises,
            };

            dispatch(add_workout(workout));
            saveNewWorkout(workout);
            dispatch(clear_list_exercises());
            dispatch(clear_current_workout());
            navigate(URL.list_workouts);
        }
    };

    return (
        <div className="current-workout__header">
            <Header
                previousPage={URL.list_workouts}
                btnRight={'flag-checkered'}
                btnEvent={handlerFinish}
                handlerClickTitle={() => setModalNameWorkout(true)}
                children={currentWorkout.name}
            />
            <SelectExercise name={name} />

            <ModalSave
                name="Название тренировки"
                active={isModalNameWorkout}
                setActive={setModalNameWorkout}
                handlerSaveBtn={handlerNameWorkout}
            />
            <Modal
                active={isModalFinish}
                setActive={setModalFinish}
                nameBtnActive="Да"
                handlerBtnActive={finishWorkout}>
                <h3>Завершить тренировку?</h3>
            </Modal>
        </div>
    );
};
export default HeaderWorkout;
