import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/FormAddSet.scss';
import MyInput from './UI/input/MyInput';
import { addSetAction } from '../../../store/parametersSetsReducer'


function FormAddSet() {

    const [weight, setWeight] = useState('');
    const [amount, setAmount] = useState('');
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const parametersSets = useSelector(state => state.parametersSets.parametersSets)

    const addSet = (event) => {
        event.preventDefault();
        const lastNumber = parametersSets[parametersSets.length - 1].number
        const parametersSet = {
            id: Date.now(),
            number: lastNumber + 1,
            weight,
            amount,
            comment
        }

        dispatch(addSetAction(parametersSet));
        setWeight('');
        setAmount('');
        setComment('');
    }


    return (
        <form className='form-addSet form'>
            <MyInput
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
                type={'tel'}
                children={'Вес (кг)'}
                placeholder={'0'}
            />
            <MyInput
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                type={'tel'}
                children={'Повторения (раз)'}
                placeholder={'0'}
            />
            <MyInput
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                type={'text'}
                children={'Заметка'}
                placeholder={'напр. Разминочный'}
            />
            <button onClick={addSet}>Готово</button>
        </form>
    );
}

export default FormAddSet;