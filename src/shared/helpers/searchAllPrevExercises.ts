import { IExercise, IWorkout } from 'shared/models';

export const searchAllPrevExercises = (
    listWorkouts: IWorkout[],
    searhId: number
) => {
    let foundExercises: IExercise[] = [];
    let foundDates: string[] = [];

    for (let i = listWorkouts.length - 1; i > 0; i--) {
        const exercises = listWorkouts[i].listExercises;
        if (exercises) {
            for (const exercise of exercises) {
                if (exercise.id === searhId) {
                    foundExercises.push(exercise);
                    console.log(listWorkouts[i].date);
                    foundDates.push(listWorkouts[i].date);
                }
            }
        }
    }
    return { foundExercises, foundDates };
};
