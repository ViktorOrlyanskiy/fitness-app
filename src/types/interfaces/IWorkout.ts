import { IExercise } from './IExercise';

export interface IWorkout {
    id: number;
    name: string;
    date: string;
    time?: string;
    listExercises?: IExercise[];
}
