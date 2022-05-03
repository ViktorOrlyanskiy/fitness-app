const defaultState = {
    listExercises: [
        { id: '1', isActive: true, name: 'Приседания', comment: '' },
        { id: '2', isActive: false, name: 'Жим гантелей', comment: '' },
        { id: '3', isActive: false, name: 'Подтягивания', comment: '' },
        { id: '4', isActive: false, name: 'Выпады', comment: '' },
    ]
}

const ADD_EXERCISE = 'ADD_EXERCISE';
const REMOVE_EXERCISE = 'REMOVE_EXERCISE';


export const listExercisesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_EXERCISE:
            return { ...state, listExercises: [...state.listExercises, action.payload] }

        case REMOVE_EXERCISE:
            return {
                ...state,
                listExercises: state.listExercises.filter(exercise => exercise.id !== action.payload)
            }

        default:
            return state
    }
}

export const addExerciseAction = (payload) => ({ type: ADD_EXERCISE, payload });
export const removeExerciseAction = (payload) => ({ type: REMOVE_EXERCISE, payload });