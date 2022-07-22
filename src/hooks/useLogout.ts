import { useAppDispatch } from 'hooks/useRedux';
import { getAuth, signOut } from 'firebase/auth';
import { remove_user } from 'store/slices/user';
import { useNavigate } from 'react-router-dom';
import { URL } from 'shared/constants/URL';
// не используется
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
                navigate(URL.base);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return handlerLogout;
};
