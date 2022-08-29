import { ISet } from 'shared/models';

export const getTotalSumSet = (sets: ISet[] | undefined) => {
    let totalSum = 0;
    if (sets) {
        sets?.forEach((set) => {
            totalSum += +set.weight * +set.amount;
        });
    }
    console.log(totalSum);

    return totalSum;
};
