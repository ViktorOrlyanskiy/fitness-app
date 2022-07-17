import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IWorkout } from 'shared/types';

import { useAppDispatch, useAppSelectors } from 'hooks/useRedux';
import { useFirestore } from 'hooks/useFirestore';

import { add_workout } from 'store/slices/listWorkouts';
import { clear_list_exercises } from 'store/slices/listExercises';
import { clear_current_workout, save_name } from 'store/slices/currentWorkout';

import { URL } from 'shared/constants/URL';

import Header from 'component/Header';
import SelectExercise from '../SelectExercise/SelectExercise';
import ModalSave from 'component/ModalSave';
import './HeaderWorkout.scss';

const HeaderWorkout: FC<{ name: string }> = ({ name }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { saveNewWorkout } = useFirestore();
    const { currentWorkout, listExercises } = useAppSelectors();
    const [modalActive, setModalActive] = useState<boolean>(false);

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
                btnEvent={finishWorkout}
                handlerClickTitle={() => setModalActive(true)}
                children={currentWorkout.name}
            />
            <SelectExercise name={name} />
            <ModalSave
                name="Название тренировки"
                active={modalActive}
                setActive={setModalActive}
                handlerSaveBtn={(value: string) => dispatch(save_name(value))}
            />
        </div>
    );
};
export default HeaderWorkout;
