import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IExercise } from "types";
import { useAppDispatch, useAppSelector } from "hooks";
import { add_exercise } from "store/listExercises";
import { formValidation, clearInputs, getStatus } from "utils/FormAddingValidation";

import Header from "component/Header/Header";
import MyInput from "component/UI/input/MyInput";

import "./FormAddExercise.scss";




const FormAddExercise: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [name, setName] = useState<string>('');
    const [comment, setComment] = useState<string>('');

    const listExercises = useAppSelector(state => state.listExercises);

    const addExercise = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (formValidation([name])) {
            const exercise: IExercise = {
                id: Date.now(),
                isActive: getStatus(listExercises),
                name,
                comment,
                sets: [],
            }

            dispatch(add_exercise(exercise));
            clearInputs([setName, setComment]);
            navigate('/list-exercises')
        }
    };


    return (
        <div className="add-exercise">
            <Header
                previousPage={'/list-exercises'}
                btnEvent={addExercise}
                children={'Новое упражение'}
            />

            <form className='add-exercise__form form'>
                <MyInput
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setName(e.target.value)
                    }
                    type={'text'}
                    children={'Название упражнения'}
                    placeholder={'напр. Приседания'}
                    autoFocus={true}
                />
                <MyInput
                    value={comment}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setComment(e.target.value)}
                    type={'text'}
                    children={'Комментарий'}
                    placeholder={'напр. 20х20 40х10 50х8 50х8'}
                />
            </form>
        </div>
    );
};
export default FormAddExercise;