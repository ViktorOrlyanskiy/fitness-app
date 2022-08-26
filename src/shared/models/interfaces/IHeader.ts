import { ReactNode } from 'react';

export interface IHeader {
    previousPage?: string;
    btnLeft?: string;
    btnRight?: string;
    handleBtnRight?:
        | ((e: React.MouseEvent<HTMLButtonElement>) => void)
        | (() => void);
    handleClickTitle?: () => void;
    children: ReactNode;
}
