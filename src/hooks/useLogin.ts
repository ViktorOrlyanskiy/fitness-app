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
import { _set_group_exercises } from 'store/actions';
import { exercises } from 'shared/constants/exercises';

export const useLogin = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const parseUser = (user: IUser) => {
        return {
            email: user.email,
            uid: user.uid,
            accessToken: user.accessToken,
            isAuth: !!user.accessToken,
        };
    };

    // обработка входа
    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(set_user(parseUser(user)));
                navigate(URL.list_workouts);
            })
            .catch(() => {
                alert('Email или пароль не действительны!');
            });
    };

    // обработка регистрации
    const handleRegistration = (email: string, password: string) => {
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

    return { handleLogin, handleRegistration };
};
