import { useNavigate } from 'react-router-dom';
import { IUser } from 'shared/models';
import { useAppDispatch } from 'hooks/useRedux';
import { set_user } from 'store/reducers/user';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth';
import { URL } from 'shared/constants/URL';
import { _set_group_exercises } from 'store/actions/exercisesStorageActions/_set_group_exercises_async';
import { exercises } from 'shared/constants/exercises';

export const useLogin = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const getStatusAuth = (token: string | null | undefined) => {
        return token !== undefined || token !== null;
    };

    const parseUser = (user: IUser) => {
        return {
            email: user.email,
            uid: user.uid,
            accessToken: user.accessToken,
            isAuth: getStatusAuth(user.accessToken),
        };
    };

    const saveUserInLocalStorage = (user: IUser) => {
        if (user.email) {
            localStorage.setItem('email', user.email);
        }
        if (user.uid) {
            localStorage.setItem('uid', user.uid);
        }
        if (user.accessToken) {
            localStorage.setItem('token', user.accessToken);
        }
    };

    // обработка входа
    const handlerLogin = (email: string, password: string) => {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(set_user(parseUser(user)));

                saveUserInLocalStorage(user);
                navigate(URL.list_workouts);
            })
            .catch(() => {
                alert('Email или пароль не действительны!');
            });
    };

    // обработка регистрации
    const handlerRegistration = (email: string, password: string) => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(set_user(parseUser(user)));
                // отправляет на сервер первоначальный набор упражений
                exercises.forEach((group) => {
                    dispatch(_set_group_exercises({ userId: user.uid, group }));
                });
                navigate(URL.list_workouts);
            })
            .catch(() => {
                alert('Email или пароль не действительны!');
            });
    };

    return { handlerLogin, handlerRegistration };
};
