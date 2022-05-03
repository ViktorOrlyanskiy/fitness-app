const defaultState = {
    parametersSets: [
        { id: 1, number: 1, weight: 10, amount: 8, comment: 'тяжело' },
    ]
}

const ADD_SET = 'ADD_SET';
const REMOVE_SET = 'REMOVE_SET';

export const parametersSetsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_SET:
            return { ...state, parametersSets: [...state.parametersSets, action.payload] }

        case REMOVE_SET:
            return {
                ...state,
                parametersSets: state.parametersSets.filter(parametersSet => parametersSet.id !== action.payload)
            }

        default:
            return state
    }
}

export const addSetAction = (payload) => ({ type: ADD_SET, payload });
export const removeSetAction = (payload) => ({ type: REMOVE_SET, payload });