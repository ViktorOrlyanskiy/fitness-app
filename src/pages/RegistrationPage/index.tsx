import { FC } from 'react';
import { useLogin } from 'hooks/useLogin';
import LoginForm from 'component/UI/form/LoginForm';
import './Registration.scss';

const Login: FC = () => {
    const { handlerRegistration } = useLogin();
    return (
        <div className="login">
            <LoginForm
                handlerClick={handlerRegistration}
                title={'Регистрация'}
                titleButton={'Зарегистрироваться'}
            />
        </div>
    );
};
export default Login;
