import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { ISet } from 'shared/models';
import { URL } from 'shared/constants/URL';
import schema from './localSchemaValidation';

import Header from 'shared/components/Header';
import '../form-add.scss';

const FormAddExercise: FC = () => {
    const navigate = useNavigate();
    // const dispatch = useAppDispatch();

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<ISet>({
        mode: 'onSubmit',
        defaultValues: {},
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        reset();
        navigate(URL.exercises_storage);
    };

    return (
        <div className="form-add-page">
            <Header
                previousPage={URL.exercises_storage}
                btnRight="check"
                btnEvent={handleSubmit(onSubmit)}
                children={'Новое упражение'}
            />
            <div className="page-container">
                <form className="form" autoComplete="off"></form>
            </div>
        </div>
    );
};
export default FormAddExercise;
