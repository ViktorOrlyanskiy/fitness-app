import { IExercise } from './IExercise';

export interface IWorkout {
    id: number;
    name: string;
    date: string;
    time?: string;
    isScheduled: boolean;
    listExercises?: IExercise[];
}
