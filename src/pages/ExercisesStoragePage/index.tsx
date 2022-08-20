import { FC, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelectors } from 'hooks/useRedux';
import { add_exercise } from 'store/reducers/listExercises';
import { create_id } from 'store/reducers/currentWorkout';
import { set_is_fetch_groups_exercises } from 'store/reducers/fetch';
import { _fetch_groups_exercises } from 'store/actions';
import { URL } from 'shared/constants/URL';
import { IExercise } from 'shared/models';
import { getStatus } from 'shared/utils/FormAddingValidation';

import Header from 'shared/components/Header';
import Group from './components/Group';
import MyButton from 'shared/components/ui/MyButton';
import './exercises-storage.scss';
import { ButtonAction } from 'shared/components/ButtonAction';

const ExercisesStorage: FC = () => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const { currentWorkout, listExercises, exercisesStorage, user, fetch } =
        useAppSelectors();
    const exercisesRef = useRef<string[]>([]);
    let exercises = exercisesRef.current;
    const previousPage = currentWorkout.id
        ? URL.current_exercises
        : URL.list_workouts;

    const handleClickExercise = (name: string, isActive: boolean) => {
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
        navigate(previousPage);
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
                dispatch(_fetch_groups_exercises(user.uid));
                dispatch(set_is_fetch_groups_exercises(false));
            }
        }
    }, [user.uid, dispatch, fetch.exercises]);

    return (
        <div className="exercises-storage">
            <Header
                previousPage={previousPage}
                btnRight="check"
                children={'Выберите упражнение'}
                btnEvent={currentWorkout.id ? addExercises : startNewWorkout}
            />
            <div className="page-container">
                {exercisesStorage.map((group) => (
                    <Group
                        key={group.name}
                        group={group}
                        handleClickExercise={handleClickExercise}
                    />
                ))}

                <ButtonAction
                    className="exercises-storage__button"
                    handleClick={() => navigate(URL.form_add_exercise)}>
                    Добавить новое упражение
                </ButtonAction>
            </div>
        </div>
    );
};
export default ExercisesStorage;
