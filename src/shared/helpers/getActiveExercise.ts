import { IExercise } from 'shared/models';

export const getActiveExercise = (listExercises: IExercise[]) => {
    return listExercises.filter((exercise) => exercise.isActive)[0];
};
