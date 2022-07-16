import { FunctionComponent } from 'react';

export interface IRoute {
    path: string;
    element: FunctionComponent;
    exact: boolean;
}
