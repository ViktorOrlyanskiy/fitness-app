import React from 'react';
import '../styles/Header.scss';
import SelectExercise from './SelectExercise';

function Header() {
    return (
        <header className="current-workout__header">
            <div className="current-workout__control">Тренировка</div>
            <div className="current-workout__time">Таймер</div>
            <SelectExercise />
        </header>
    )

}
export default Header;