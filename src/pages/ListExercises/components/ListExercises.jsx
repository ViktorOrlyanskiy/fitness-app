import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import '../styles/ListExercises.scss';
import Exercise from './Exercise';

export const ListExercises = () => {


    const listExercises = useSelector(state => state.listExercises.listExercises)
    console.log(listExercises);

    const dataForHeader = {
        to: '/current-workout',
        // btnEvent: addSet,
        btnReight: 'pencil'
    };

    return (
        <div className="list-exercise">

            <Header {...dataForHeader}>Список упражнений</Header>

            <div className='list-exercise__body'>
                {(listExercises.length > 0)
                    ? listExercises.map(exercise => <Exercise key={exercise.id} {...exercise} />)
                    : <div></div>
                }
            </div>

            <Footer to={'add-exercise'}>Добавить упражение</Footer>
        </div >
    );
}
