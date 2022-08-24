import { IExercise } from 'shared/models';

export const getStatus = (array: IExercise[]) => {
    return array.length > 0 ? false : true;
};
