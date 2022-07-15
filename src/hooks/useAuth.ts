import { useAppSelector } from 'hooks/useRedux';

export const useAuth = () => {
    const { email, accessToken, uid } = useAppSelector((state) => state.user);

    return {
        isAuth: !!email,
        email,
        accessToken,
        uid,
    };
};
