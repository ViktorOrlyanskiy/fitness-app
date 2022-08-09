import { IGroupExercises } from 'shared/types';
export const getIdNewExercise = (
    groupName: string,
    exercises: IGroupExercises[]
): number => {
    let newId = 0;
    const group = exercises.find((group) => group.name === groupName);
    group?.list.forEach((exercise) => {
        if (newId < exercise.id) {
            newId = exercise.id;
        }
    });
    return ++newId;
};
