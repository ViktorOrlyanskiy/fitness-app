import { useAppSelector } from 'hooks';

export const useAuth = () => {
    const { email, accessToken, uid } = useAppSelector((state) => state.user);

    return {
        isAuth: !!email,
        email,
        accessToken,
        uid,
    };
};
