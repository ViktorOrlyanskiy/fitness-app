import { FC, useState } from 'react';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import './login.scss';

const Login: FC = () => {
    const [isLogin, setLogin] = useState(true);

    return (
        <div className="bg-wrapper">
            <div className="main-cotainer">
                <div className="login">
                    <div className="login__container">
                        {isLogin ? (
                            <>
                                <LoginForm />
                                <div className="login__link">
                                    Нет личного кабинета?{' '}
                                    <span onClick={() => setLogin(!isLogin)}>
                                        Зарегистрируйтесь!
                                    </span>
                                </div>
                            </>
                        ) : (
                            <>
                                <RegistrationForm />
                                <div className="login__link">
                                    Есть личный кабинет?{' '}
                                    <span onClick={() => setLogin(!isLogin)}>
                                        Войти!
                                    </span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                {/*  */}
            </div>
            {/* 
                <LoginForm
                    handleClick={handleLogin}
                    title={'Вход'}
                    titleButton={'Войти'}
                />
            */}
        </div>
    );
};
export default Login;
