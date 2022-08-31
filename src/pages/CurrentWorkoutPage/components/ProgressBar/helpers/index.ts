import { IExercise, IWorkout } from 'shared/models';

export const searchFirstPrevExercise = (
    listWorkouts: IWorkout[],
    searhId: number
): IExercise | number | undefined => {
    let findExercise: IExercise | undefined;
    let blockExerciseId: number | undefined;

    outer: for (let i = listWorkouts.length - 1; i > 0; i--) {
        const exercises = listWorkouts[i].listExercises;
        if (exercises) {
            for (const exercise of exercises) {
                if (exercise.id === searhId) {
                    findExercise = exercise;
                    break outer;
                } else {
                    blockExerciseId = searhId;
                }
            }
        }
    }
    return findExercise ? findExercise : blockExerciseId;
};
