import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.scss';

interface LoginProps {
    title: string;
    handlerClick: (arg1: string, arg2: string) => void;
    titleButton: string;
}

const LoginForm: FC<LoginProps> = ({ title, handlerClick, titleButton }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailDirty, setEmailDirty] = useState<boolean>(false);
    const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<string>(
        'Email не может быть пустым'
    );
    const [passwordError, setPasswordError] = useState<string>(
        'Пароль не может быть пустым'
    );
    const [formValid, setFormValid] = useState<boolean>(false);

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError]);

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        const re =
            /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i;

        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный Email!');
        } else {
            setEmailError('');
        }
    };

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (e.target.value.length < 6) {
            setPasswordError('Не менее 6 символов и 1 буквы (a-z)');
            if (!e.target.value) {
                setPasswordError('Пароль не должен быть пустым');
            }
        } else {
            setPasswordError('');
        }
    };

    const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
        }
    };

    const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        handlerClick(email, password);
    };

    return (
        <form className="form">
            <h1 className="form__title">{title}</h1>

            {emailDirty && emailError && (
                <div style={{ color: 'red' }}>{emailError}</div>
            )}
            <input
                type="text"
                name="email"
                className="form__input"
                value={email}
                placeholder="Enter your Email...."
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => emailHandler(e)}
            />

            {passwordDirty && passwordError && (
                <div style={{ color: 'red' }}>{passwordError}</div>
            )}
            <input
                type="password"
                name="password"
                className="form__input"
                value={password}
                placeholder="Enter your password...."
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => passwordHandler(e)}
            />

            <button
                disabled={!formValid}
                type="submit"
                className="form__button"
                onClick={(e) => onSubmit(e)}>
                {titleButton}
            </button>

            {title === 'Вход' ? (
                <div className="form__text">
                    Нет личного кабинета?
                    <Link to="/registration" style={{ color: 'blue' }}>
                        {' '}
                        Зарегистрируйтесь!
                    </Link>
                </div>
            ) : (
                ''
            )}
        </form>
    );
};
export default LoginForm;
