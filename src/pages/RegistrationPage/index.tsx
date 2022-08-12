import { FC } from 'react';
import { useLogin } from 'hooks/useLogin';
import LoginForm from 'shared/components/LoginForm';

const Login: FC = () => {
    const { handleRegistration } = useLogin();
    return (
        <div className="login">
            <LoginForm
                handlerClick={handleRegistration}
                title={'Регистрация'}
                titleButton={'Зарегистрироваться'}
            />
        </div>
    );
};
export default Login;
