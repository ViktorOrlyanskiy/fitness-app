import { ReactNode } from 'react';

export interface IHeader {
    previousPage?: string;
    btnLeft?: string;
    btnRight?: string;
    btnEvent?:
        | ((e: React.MouseEvent<HTMLButtonElement>) => void)
        | (() => void);
    handlerClickTitle?: () => void;
    children: ReactNode;
}
