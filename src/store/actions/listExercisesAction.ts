import { IExercise, ISet } from 'shared/types';

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
        exercise.id === id
            ? (exercise.isActive = true)
            : (exercise.isActive = false);
    }
}

export function addSet(state: IExercise[], payload: ISet) {
    for (const exercise of state) {
        if (exercise.isActive && exercise.sets) {
            exercise.sets.push(payload);
        }
    }
}

export function removeSet(state: IExercise[], payload: number) {
    for (const exercise of state) {
        if (exercise.isActive) {
            exercise.sets = exercise.sets?.filter(({ id }) => id !== payload);
        }
    }
}

export function copySet(state: IExercise[], payload: number) {
    state.forEach(exercise => {
        exercise.sets?.forEach(set => {
            if (set.id === payload)
                exercise.sets?.push({ ...set, id: Date.now() });
        });
    });
}

export function editSet(state: IExercise[], payload: ISet) {
    state.forEach(exercise => {
        exercise.sets?.forEach(set => {
            if (set.id === payload.id) {
                set.weight = payload.weight;
                set.amount = payload.amount;
                set.comment = payload.comment;
            }
        });
    });
}
