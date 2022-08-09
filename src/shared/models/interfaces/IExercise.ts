import { ISet } from './ISet';

export interface IExercise {
    id: number;
    isActive: boolean;
    name: string;
    comment?: string;
    sets?: ISet[];
}
