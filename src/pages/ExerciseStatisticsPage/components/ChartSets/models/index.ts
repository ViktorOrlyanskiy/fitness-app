export interface IDataChart {
    labels: string[];
    data: number[];
    currentItem: 'totalSum' | 'maxWeight';
}

export type ISetDataChart = (
    dataChart: IDataChart,
    newDetails: {
        [k: string]: string[] | number[] | 'totalSum' | 'maxWeight';
    }
) => IDataChart;
