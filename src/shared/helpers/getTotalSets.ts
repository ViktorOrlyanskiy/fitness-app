import { ISet } from 'shared/models';

export const getTotalSets = (sets: ISet[] | undefined) => {
    let totalSum = 0;
    if (sets) {
        sets?.forEach((set) => {
            totalSum += +set.weight * +set.amount;
        });
    }

    return totalSum;
};
