const defaultState = {
    parametersSets: [
        { id: 1, number: 1, weight: 10, amount: 8, comment: 'тяжело' },
        { id: 2, number: 2, weight: 10, amount: 8, comment: 'тяжело' },
        { id: 3, number: 2, weight: 10, amount: 8, comment: 'тяжело' },
        { id: 4, number: 2, weight: 10, amount: 8, comment: 'тяжело' },
        { id: 5, number: 2, weight: 10, amount: 8, comment: 'тяжело' },
    ]
}

const ADD_SET = 'ADD_SET';

export const parametersSetsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_SET:
            return { ...state, parametersSets: [...state.parametersSets, action.payload] }

        default:
            return state
    }
}

export const addSetAction = (payload) => ({ type: ADD_SET, payload });