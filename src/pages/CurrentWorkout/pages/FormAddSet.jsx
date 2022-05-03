import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addSetAction } from '../../../store/parametersSetsReducer';
import { clearInputs, formValidation } from '../utils/formValidation';
import Header from '../../../components/Header/Header';
import MyInput from '../components/UI/input/MyInput';
import '../styles/FormAddSet.scss';

function FormAddSet() {

    const [weight, setWeight] = useState('');
    const [amount, setAmount] = useState('');
    const [comment, setComment] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const parametersSets = useSelector(state => state.parametersSets.parametersSets)

    const addSet = (event) => {

        event.preventDefault();

        if (formValidation([weight, amount])) {
            const lastNumber = parametersSets[parametersSets.length - 1].number;
            const parametersSet = {
                id: Date.now(),
                number: lastNumber + 1,
                weight,
                amount,
                comment
            }

            dispatch(addSetAction(parametersSet));
            clearInputs([setWeight, setAmount, setComment]);
            navigate('/current-workout')
        }
    }

    const dataForHeader = { to: '/current-workout', btnEvent: addSet, };

    return (

        <div className="add-set">
            <Header {...dataForHeader}>Новый подход</Header>

            <form className='add-set__form form'>
                <MyInput
                    value={weight}
                    onChange={(event) => setWeight(event.target.value)}
                    type={'tel'}
                    children={'Вес (кг)'}
                    placeholder={'0'}
                    autoFocus={true}
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
            </form>
        </div>

    );
}

export default FormAddSet;