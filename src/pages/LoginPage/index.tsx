import { FC } from 'react';
import { useLogin } from 'hooks/useLogin';
import LoginForm from 'shared/components/ui/form/LoginForm';
import './Login.scss';

const Login: FC = () => {
    const { handlerLogin } = useLogin();
    return (
        <div className="login">
            <LoginForm
                handlerClick={handlerLogin}
                title={'Вход'}
                titleButton={'Войти'}
            />
        </div>
    );
};
export default Login;
