import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { URL } from 'shared/constants/URL';
import { IExercise } from 'shared/types';
import { useAppDispatch, useAppSelectors } from 'hooks/useRedux';
import { add_exercise } from 'store/reducers/listExercises';
import {
    formValidation,
    clearInputs,
    getStatus,
} from 'shared/utils/FormAddingValidation';

import Header from 'shared/components/Header';
import MyInput from 'shared/components/ui/MyInput';

import './form-add-exercise.scss';

const FormAddExercise: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [name, setName] = useState<string>('');
    const [comment, setComment] = useState<string>('');

    const { listExercises } = useAppSelectors();

    const addExercise = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (formValidation([name])) {
            const exercise: IExercise = {
                id: Date.now(),
                isActive: getStatus(listExercises),
                name,
                comment,
                sets: [],
            };

            dispatch(add_exercise(exercise));
            clearInputs([setName, setComment]);
            navigate(URL.current_exercises);
        }
    };

    return (
        <div className="add-exercise">
            <Header
                previousPage={URL.current_exercises}
                btnEvent={addExercise}
                children={'Новое упражение'}
            />

            <form className="add-exercise__form form">
                <MyInput
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setName(e.target.value)
                    }
                    type={'text'}
                    label={'Название упражнения'}
                    placeholder={'напр. Приседания'}
                    autoFocus={true}
                />
                <MyInput
                    value={comment}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setComment(e.target.value)
                    }
                    type={'text'}
                    label={'Комментарий'}
                    placeholder={'напр. 20х20 40х10 50х8 50х8'}
                />
            </form>
        </div>
    );
};
export default FormAddExercise;
