import React from 'react';
import '../styles/SelectExercise.scss'
import { SvgGeneration } from '../../../components/UI/SvgGeneration/SvgGeneration';
import { NavLink } from 'react-router-dom';

function SelectExercise() {

    return (
        <div className="current-workout__exercise select-exercise">
            <div className="select-exercise__column">
                <SvgGeneration id={'chevron-down'} />
            </div>
            <NavLink to="/list-exercises" className="select-exercise__column" >
                <div className="select-exercise__title">Приседания</div>
                <div className="select-exercise__comment">4x15 4x10 4x15 4x10</div>
            </NavLink>
            <div className="select-exercise__column">
                <div className="select-exercise__btn">btn</div>
            </div>
        </div>
    );
}

export default SelectExercise;