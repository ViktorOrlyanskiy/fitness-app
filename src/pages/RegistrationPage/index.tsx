import { FC } from 'react';
import { useLogin } from 'hooks/useLogin';
import LoginForm from 'shared/components/ui/form/LoginForm';

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
