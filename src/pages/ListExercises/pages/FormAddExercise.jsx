import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import MyInput from '../components/UI/input/MyInput';
import '../styles/FormAddExercise.scss';

function FormAddExercise() {


    return (


        <div className="add-set">
            <Header>Новое упражение</Header>

            <form className='add-set__form form'>
                <MyInput
                    value={weight}
                    onChange={(event) => setWeight(event.target.value)}
                    type={'tel'}
                    children={'Вес (кг)'}
                    placeholder={'0'}
                    autoFocus={true}
                />
            </form>
        </div>

    );
}

export default FormAddExercise;