export interface IUser {
    email: string | null;
    uid: string | null;
    accessToken?: string | null | undefined;
    isAuth?: boolean;
}
