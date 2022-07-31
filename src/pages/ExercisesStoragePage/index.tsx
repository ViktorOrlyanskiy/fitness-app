import { FC, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelectors } from 'hooks/useRedux';
import { add_exercise } from 'store/slices/listExercises';
import { create_id } from 'store/slices/currentWorkout';
import { URL } from 'shared/constants/URL';
import { IExercise } from 'shared/types';

import Header from 'shared/components/Header';
import Group from './components/Group';
import { groups } from './content';
import { getStatus } from 'shared/utils/FormAddingValidation';
import './exercises-storage.scss';

const ExercisesStorage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { currentWorkout, listExercises } = useAppSelectors();
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

    return (
        <div className="exercises-storage">
            <Header
                children={'Выберите упражнение'}
                btnEvent={currentWorkout.id ? addExercises : startNewWorkout}
            />
            <div className="page-container">
                {groups.map((group) => (
                    <Group
                        key={group.name}
                        {...group}
                        handlerClickExercise={handlerClickExercise}
                    />
                ))}
            </div>
        </div>
    );
};
export default ExercisesStorage;
