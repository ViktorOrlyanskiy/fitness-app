import React from 'react';
import { SvgGeneration } from '../../../components/UI/SvgGeneration/SvgGeneration';
import '../styles/Exercise.scss';

function Exercise(props) {

    const getActiveExercise = (status) => {
        return (status)
            ? <div className="exercise__active exercise__active_active"><SvgGeneration id={'circle-check'} /></div>
            : <div className="exercise__active"></div>;
    };

    return (
        <div className="exercise">
            {getActiveExercise(props.isActive)}
            <div className="exercise__title">{props.name}</div>
            <div className="exercise__amount-sets">{props.amount}</div>
        </div>
    )
};
export default Exercise;
