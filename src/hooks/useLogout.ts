import { useAppDispatch } from 'hooks';
import { getAuth, signOut } from 'firebase/auth';
import { remove_user } from 'store/slices/user';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // обработка разлогинивания
    const handlerLogout = () => {
        const auth = getAuth();

        signOut(auth)
            .then(() => {
                dispatch(remove_user());
                localStorage.clear();
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return handlerLogout;
};
