import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { add_set, edit_set } from 'store/reducers/listExercises';
import { clear_service_set } from 'store/reducers/editSet';
import { URL } from 'shared/constants/URL';
import { ISet } from 'shared/models';
import { formValidation, clearInputs } from 'shared/utils/FormAddingValidation';

import Header from 'shared/components/Header';
import MyInput from 'shared/components/ui/MyInput';

import './form-add-set.scss';

const FormAddSet: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const set = useAppSelector((state) => state.editSet);

    const [weight, setWeight] = useState<string>(set.weight ? set.weight : '');
    const [amount, setAmount] = useState<string>(set.amount ? set.amount : '');
    const [comment, setComment] = useState<string>(
        set?.comment ? set.comment : ''
    );

    const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (formValidation([weight, amount])) {
            const newSet: ISet = {
                id: set.id ? set.id : Date.now(),
                weight,
                amount,
                comment,
            };

            dispatch(set.id ? edit_set(newSet) : add_set(newSet));
            if (set.id) {
                dispatch(clear_service_set());
            }
            clearInputs([setWeight, setAmount, setComment]);
            navigate(URL.current_workout);
        }
    };

    return (
        <div className="add-set">
            <Header
                previousPage={URL.current_workout}
                btnEvent={submit}
                children={'Новый подход'}
            />

            <form className="add-set__form form">
                <MyInput
                    value={weight}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setWeight(e.target.value)
                    }
                    type={'tel'}
                    label={'Вес (кг)'}
                    placeholder={'0'}
                    autoFocus={true}
                />
                <MyInput
                    value={amount}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setAmount(e.target.value)
                    }
                    type={'tel'}
                    label={'Повторения (раз)'}
                    placeholder={'0'}
                />
                <MyInput
                    value={comment}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setComment(e.target.value)
                    }
                    type={'text'}
                    label={'Заметка'}
                    placeholder={'напр. Разминочный'}
                />
            </form>
        </div>
    );
};
export default FormAddSet;
