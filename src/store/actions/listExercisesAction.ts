import { IExercise, ISet } from "types";


export function changeActiveExercise(state: IExercise[]) {
    let flag = false;

    for (const exercise of state) {
        if (!exercise.isActive && !flag) flag = true;
    }

    if (flag) {
        state[0].isActive = true;
        flag = false;
    }
}

export function changeExercise(state: IExercise[], id: number) {
    for (const exercise of state) {
        (exercise.id === id)
            ? exercise.isActive = true
            : exercise.isActive = false;
    }
}

export function addSet(state: IExercise[], payload: ISet) {
    for (const exercise of state) {
        if (exercise.isActive && exercise.sets) {
            exercise.sets.push(payload)
        }
    }
}

export function removeSet(state: IExercise[], payload: number) {
    for (const exercise of state) {
        if (exercise.isActive) {
            exercise.sets = exercise.sets?.filter(({ id }) => id !== payload)
        }
    }
}