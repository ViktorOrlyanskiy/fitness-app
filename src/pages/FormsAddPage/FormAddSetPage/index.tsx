import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { add_set, edit_set } from 'store/reducers/listExercises';
import { clear_service_set } from 'store/reducers/editSet';
import { ISet } from 'shared/models';
import { URL } from 'shared/constants/URL';
import schema from './localSchemaValidation';

import Header from 'shared/components/Header';
import '../form-add.scss';

const FormAddSet: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const set = useAppSelector((state) => state.editSet);
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<ISet>({
        mode: 'onSubmit',
        defaultValues: {
            weight: set.weight || '',
            amount: set.amount || '',
            comment: set.comment || '',
        },
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: ISet) => {
        const newSet: ISet = {
            id: set.id ? set.id : Date.now(),
            weight: data.weight,
            amount: data.amount,
            comment: data.comment,
        };
        if (set.id) {
            dispatch(edit_set(newSet));
            dispatch(clear_service_set());
        } else {
            dispatch(add_set(newSet));
        }
        reset();
        navigate(URL.current_workout);
    };

    return (
        <div className="form-add-page">
            <Header
                previousPage={URL.current_workout}
                btnRight="check"
                btnEvent={handleSubmit(onSubmit)}
                children={'Новый подход'}
            />
            <div className="page-container">
                <form className="form" autoComplete="off">
                    <div className="form__field">
                        <label htmlFor="weight">Вес (кг)</label>
                        <input
                            id="weight"
                            type="number"
                            placeholder="0"
                            {...register('weight')}
                        />
                        {errors?.weight && (
                            <p className="form__error">
                                {errors.weight?.message}
                            </p>
                        )}
                    </div>
                    <div className="form__field">
                        <label htmlFor="amount">Повторения (раз)</label>
                        <input
                            id="amount"
                            type="number"
                            placeholder="0"
                            {...register('amount')}
                        />
                        {errors?.amount && (
                            <p className="form__error">
                                {errors.amount?.message}
                            </p>
                        )}
                    </div>
                    <div className="form__field">
                        <label htmlFor="comment">Комментарий</label>
                        <input
                            id="comment"
                            placeholder="напр. Разминочный"
                            {...register('comment')}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};
export default FormAddSet;
