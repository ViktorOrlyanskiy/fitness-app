import { useAppSelector } from 'hooks';

export const useAppSelectors = () => {
    const listWorkouts = useAppSelector((state) => state.listWorkouts);
    const listExercises = useAppSelector((state) => state.listExercises);
    const currentWorkout = useAppSelector((state) => state.currentWorkout);
    const user = useAppSelector((state) => state.user);

    return { listWorkouts, listExercises, currentWorkout, user };
};
