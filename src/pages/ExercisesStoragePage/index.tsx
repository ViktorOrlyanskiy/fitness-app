import React, { FC, useRef } from 'react';
import Header from 'shared/components/Header';
import Group from './components/Group';
import { URL } from 'shared/constants/URL';
import { groups } from './content';
import { IExercise } from 'shared/types';
import { getStatus } from 'shared/utils/FormAddingValidation';
import './exercises-storage.scss';
import { useAppDispatch, useAppSelectors } from 'hooks/useRedux';
import { add_exercise } from 'store/slices/listExercises';
import { useNavigate } from 'react-router-dom';
import { create_id } from 'store/slices/currentWorkout';

const ExercisesStorage: FC = () => {
    const exercisesRef = useRef<string[]>([]);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { listExercises, currentWorkout } = useAppSelectors();

    const handlerClickExercise = (name: string, isActive: boolean) => {
        if (isActive && exercisesRef.current.includes(name)) {
            exercisesRef.current = exercisesRef.current.filter(
                (item) => item !== name
            );
        } else {
            exercisesRef.current.push(name);
        }
    };

    const startNewWorkout = () => {
        if (exercisesRef.current.length > 0) {
            exercisesRef.current.forEach((exercise, index) => {
                const [id, name] = exercise.split('*');
                const newExercise: IExercise = {
                    id: +id,
                    isActive: index > 0 ? false : true,
                    name,
                    sets: [],
                };
                dispatch(add_exercise(newExercise));
            });

            if (!currentWorkout.id) {
                dispatch(create_id());
                navigate(URL.current_workout);
            }
        }
    };

    return (
        <div className="exercises-storage">
            <Header
                previousPage={URL.list_workouts}
                children={'Выберите упражнение'}
                btnEvent={startNewWorkout}
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
