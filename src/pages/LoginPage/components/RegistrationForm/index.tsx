import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLogin } from 'hooks/useLogin';
import schema from './localSchemaValidation';

interface Inputs {
    email: string;
    password: string;
    repeatPassword: string;
}

const RegistrationForm: FC = () => {
    const { handleRegistration } = useLogin();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        mode: 'onSubmit',
        defaultValues: { email: '', password: '' },
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: Inputs) => {
        handleRegistration(data.email, data.password);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login__title">Регистрация</div>

            <input
                className="login__input"
                placeholder="E-mail"
                {...register('email')}
            />
            {errors?.email && (
                <p className="login__error">{errors.email?.message}</p>
            )}

            <input
                className="login__input login__input--password"
                placeholder="Password"
                {...register('password')}
            />
            {errors?.password && (
                <p className="login__error">{errors.password?.message}</p>
            )}

            <input
                className="login__input login__input--password"
                placeholder="Repeat password"
                {...register('repeatPassword')}
            />
            {errors?.repeatPassword && (
                <p className="login__error">{errors.repeatPassword?.message}</p>
            )}

            <button type="submit" className="login__btn">
                Создать аккаунт
            </button>
        </form>
    );
};
export default RegistrationForm;
