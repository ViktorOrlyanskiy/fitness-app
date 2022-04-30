import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import { store } from './store/index';

// const defaultState = {
//     parametersSets: [
//         { id: 1, weight: 10, amount: 8, comment: 'тяжело' },
//     ]
// }

// const parametersSetsReducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case 'ADD_SET':
//             return { ...state, parametersSets: [...state.parametersSets, action.payload] }

//         default:
//             return state
//     }
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>)
