import React from 'react';
import { useSelector } from 'react-redux';
import Set from './Set'
import Header from './Header';
import Footer from '../../../components/Footer/Footer';
import '../styles/CurrentWorkout.scss'

export const CurrentWorkout = () => {

    const parametersSets = useSelector(state => state.parametersSets.parametersSets)

    return (
        <div className='current-workout'>

            <Header />

            <div className="current-workout__body">
                {parametersSets.length > 0
                    ? parametersSets.map(parametersSet =>
                        <Set key={parametersSet.id} parameters={parametersSet} />)
                    : <div></div>
                }
            </div>
            <Footer to={'add-set'}>Добавить подход</Footer>
        </div>
    );
}