import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLogin } from 'hooks/useLogin';
import LoginForm from 'shared/components/LoginForm';
import './login.scss';

interface Inputs {
    email: string;
    password: string;
}

const Login: FC = () => {
    const { handlerLogin } = useLogin();

    const schema = yup
        .object()
        .shape({
            // email: yup
            //     .string()
            //     .trim()
            //     .email('Введите email')
            //     .required('Обязательное поле'),
            // password: yup.string().required('Обязательное поле'),
        })
        .required();

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
        console.log(data);
        handlerLogin(data.email, data.password);
    };

    return (
        <div className="login">
            {/*      <form
                 onSubmit={handleSubmit(onSubmit)}
                 className="login__container"
                 autoComplete="off">
                 <div className="login__title">Вход</div>

                 <input
                     className="login__input"
                     placeholder="E-mail"
                     {...register('email')}
                 />
                 {errors?.email && (
                     <p className="login__error">{errors.email?.message}</p>
                 )}

                 <input
                     className="login__input"
                     placeholder="Password"
                     {...register('password')}
                 />
                 {errors?.email && (
                     <p className="login__error">{errors.password?.message}</p>
                 )}

                 <button type="submit" className="login__btn">
                     Войти
                 </button>
             </form> */}

            {
                <LoginForm
                    handlerClick={handlerLogin}
                    title={'Вход'}
                    titleButton={'Войти'}
                />
            }
        </div>
    );
};
export default Login;
