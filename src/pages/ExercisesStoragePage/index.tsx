import { FC, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelectors } from 'hooks/useRedux';
import { add_exercise } from 'store/reducers/listExercises';
import { create_id } from 'store/reducers/currentWorkout';
import { set_fetch_exercises } from 'store/reducers/fetch';
import { _fetch_exercises } from 'store/actions/exercisesStorageActions/_fetch_exercises_async';
import { URL } from 'shared/constants/URL';
import { IExercise } from 'shared/types';
import { getStatus } from 'shared/utils/FormAddingValidation';

import Header from 'shared/components/Header';
import Group from './components/Group';
import MyButton from 'shared/components/ui/MyButton';
import ModalAddSet from './components/ModalAddExercise';
import './exercises-storage.scss';
import Footer from 'shared/components/Footer';

const ExercisesStorage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [isOpenModal, setOpenModal] = useState(false);
    const { currentWorkout, listExercises, exercisesStorage, user, fetch } =
        useAppSelectors();
    const exercisesRef = useRef<string[]>([]);
    let exercises = exercisesRef.current;

    const handlerClickExercise = (name: string, isActive: boolean) => {
        if (isActive && exercises.includes(name)) {
            exercises = exercises.filter((item) => item !== name);
        } else {
            exercises.push(name);
        }
    };

    const addExercises = () => {
        exercises.forEach((exercise) => {
            const [id, name] = exercise.split('*');

            let includes = listExercises.find(
                (exercise) => exercise.id === +id
            );

            if (!includes) {
                const newExercise: IExercise = {
                    id: Number(id),
                    isActive: getStatus(listExercises),
                    name,
                    sets: [],
                };
                dispatch(add_exercise(newExercise));
            }
        });
        navigate(-1);
    };

    const startNewWorkout = () => {
        exercises.forEach((exercise, index) => {
            const [id, name] = exercise.split('*');
            const newExercise: IExercise = {
                id: Number(id),
                isActive: index > 0 ? false : true,
                name,
                sets: [],
            };
            dispatch(add_exercise(newExercise));
        });

        dispatch(create_id());
        navigate(URL.current_workout);
    };

    // получает exercisesStorage от сервера
    useEffect(() => {
        if (fetch.exercises) {
            if (user.uid) {
                dispatch(_fetch_exercises(user.uid));
                dispatch(set_fetch_exercises(false));
            }
        }
    }, [user.uid, dispatch, fetch.exercises]);

    return (
        <div className="exercises-storage">
            <Header
                children={'Выберите упражнение'}
                btnEvent={currentWorkout.id ? addExercises : startNewWorkout}
            />
            <div className="page-container">
                {exercisesStorage.map((group) => (
                    <Group
                        key={group.name}
                        {...group}
                        handlerClickExercise={handlerClickExercise}
                    />
                ))}
                {/* <Footer nextPage={URL.add_exercise}>
                    Добавить новое упражение
                </Footer> */}

                <div className="exercises-storage__button">
                    <MyButton
                        hidden={isOpenModal}
                        onClick={() => setOpenModal(!isOpenModal)}>
                        Добавить новое упражение
                    </MyButton>
                </div>
                <ModalAddSet isOpen={isOpenModal} setOpen={setOpenModal} />
            </div>
        </div>
    );
};
export default ExercisesStorage;
