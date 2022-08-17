import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLogin } from 'hooks/useLogin';
import schema from './localSchemaValidation';

interface Inputs {
    email: string;
    password: string;
}

const LoginForm: FC = () => {
    const { handleLogin } = useLogin();

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
        handleLogin(data.email, data.password);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login__title">Вход</div>

            <input
                type="email"
                className="login__input"
                placeholder="E-mail"
                {...register('email')}
            />
            {errors?.email && (
                <p className="login__error">{errors.email?.message}</p>
            )}

            <input
                type="password"
                className="login__input login__input--password"
                placeholder="Password"
                {...register('password')}
            />
            {errors?.email && (
                <p className="login__error">{errors.password?.message}</p>
            )}

            <button type="submit" className="login__btn">
                Войти
            </button>
        </form>
    );
};
export default LoginForm;
