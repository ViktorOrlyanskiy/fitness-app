import { IExercise, ISet } from 'shared/models';

export const getDataForChart: (
    count: number,
    exercises: IExercise[],
    callback: (arg1: ISet[]) => number
) => number[] = (count, exercises, callback) =>
    [...Array(count)].map((_, i) => callback(exercises[i].sets)).reverse();

export const getLabelsForChart: (
    count: number,
    labels: string[]
) => string[] = (count, labels) =>
    [...Array(count)].map((_, i) => labels[i].replace(/.{3}$/, '')).reverse();

export const getMaxWeigth = (sets: ISet[]) =>
    sets.reduce((maxValue: number, value: ISet): number => {
        return maxValue > +value.weight ? maxValue : +value.weight;
    }, 0);
