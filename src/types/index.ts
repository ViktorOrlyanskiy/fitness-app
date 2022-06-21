export interface IHeader {
    to: string;
    btnLeft?: string;
    btnReight?: string;
    btnEvent?: () => void;
    children: React.ReactNode;
}

export interface IFooter {
    to: string;
    children: React.ReactNode;
}

export interface ISet {
    id: number;
    weight: number;
    amount: number;
    comment?: string;
}

export interface IExercise {
    id: number;
    isActive: boolean;
    name: string;
    comment: string;
    sets?: ISet[];
}

export interface IWorkout {
    id: number;
    name: string;
    date: string;
    time?: string;
    listExercises?: IExercise[];
}