import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Set from './Set'
import '../styles/CurrentWorkout.scss'
import FormAddSet from './FormAddSet';

export const CurrentWorkout = () => {

    const parametersSets = useSelector(state => state.parametersSets.parametersSets)

    return (
        <div className='current-workout'>

            {/* <FormAddSet /> */}

            <div className="current-workout__header">

            </div>

            <div className="current-workout__body">
                {parametersSets.length > 0
                    ? parametersSets.map(parametersSet =>
                        <Set key={parametersSet.id} parameters={parametersSet} />)
                    : <div></div>
                }
            </div>
            <div className="current-workout__footer">
                <button
                    className='button__add-set'
                >
                    Добавить подход
                </button>
            </div>
        </div>
    );
}