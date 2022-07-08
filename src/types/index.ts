import { FunctionComponent, ReactNode } from "react";

export interface IRoute {
    path: string;
    element: FunctionComponent;
    exact: boolean;
}

export interface IHeader {
    previousPage: string;
    btnLeft?: string;
    btnRight?: string;
    btnEvent?: ((e: React.MouseEvent<HTMLButtonElement>) => void) | (() => void);
    handlerClickTitle?: () => void;
    children: ReactNode;
}

export interface IFooter {
    nextPage: string;
    children: ReactNode;
}

export interface ISet {
    id: number;
    weight: string;
    amount: string;
    comment?: string;
}

export interface IExercise {
    id: number;
    isActive: boolean;
    name: string;
    comment?: string;
    sets?: ISet[];
}

export interface IWorkout {
    id: number;
    name: string;
    date: string;
    time?: string;
    listExercises?: IExercise[];
}