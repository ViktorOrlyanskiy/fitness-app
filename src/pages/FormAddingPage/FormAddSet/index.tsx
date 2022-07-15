import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useRedux';
import { formValidation, clearInputs } from 'utils/FormAddingValidation';
import { add_set } from 'store/slices/listExercises';

import Header from 'component/Header/Header';
import MyInput from 'component/UI/input/MyInput';

import './FormAddSet.scss';
import { ISet } from 'types';

const FormAddSet: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [weight, setWeight] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [comment, setComment] = useState<string>('');

    const addSet = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (formValidation([weight, amount])) {
            const set: ISet = {
                id: Date.now(),
                weight,
                amount,
                comment,
            };

            dispatch(add_set(set));
            clearInputs([setWeight, setAmount, setComment]);
            navigate('/current-workout');
        }
    };

    return (
        <div className="add-set">
            <Header
                previousPage={'/current-workout'}
                btnEvent={addSet}
                children={'Новый подход'}
            />

            <form className="add-set__form form">
                <MyInput
                    value={weight}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setWeight(e.target.value)
                    }
                    type={'tel'}
                    children={'Вес (кг)'}
                    placeholder={'0'}
                    autoFocus={true}
                />
                <MyInput
                    value={amount}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setAmount(e.target.value)
                    }
                    type={'tel'}
                    children={'Повторения (раз)'}
                    placeholder={'0'}
                />
                <MyInput
                    value={comment}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setComment(e.target.value)
                    }
                    type={'text'}
                    children={'Заметка'}
                    placeholder={'напр. Разминочный'}
                />
            </form>
        </div>
    );
};
export default FormAddSet;
