import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from 'store/index';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppSelectors = () => {
    const listWorkouts = useAppSelector((state) => state.listWorkouts);
    const listExercises = useAppSelector((state) => state.listExercises);
    const currentWorkout = useAppSelector((state) => state.currentWorkout);
    const exercisesStorage = useAppSelector((state) => state.exercisesStorage);
    const user = useAppSelector((state) => state.user);
    const fetch = useAppSelector((state) => state.fetch);

    return {
        listWorkouts,
        listExercises,
        currentWorkout,
        exercisesStorage,
        user,
        fetch,
    };
};
