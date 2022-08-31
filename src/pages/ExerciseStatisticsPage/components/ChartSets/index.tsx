import { FC, useState, useEffect, useReducer } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { IExercise } from 'shared/models';
import { getActiveStyles, getTotalSumSet } from 'shared/helpers';

import MyButton from 'shared/components/ui/MyButton';
import { IDataChart, ISetDataChart } from './models';
import { getDataForChart, getLabelsForChart, getMaxWeigth } from './helpers';
import './chart-sets.scss';

interface ChartSetsProps {
    exercises: IExercise[];
    dates: string[];
}

export const ChartSets: FC<ChartSetsProps> = ({ exercises, dates }) => {
    Chart.register(CategoryScale);

    const countBars = dates.length < 5 ? dates.length : 5;
    const initDataChart: IDataChart = {
        labels: [],
        data: [],
        currentItem: 'totalSum',
    };
    const dataChartReducer: ISetDataChart = (dataChart, newDetails) => ({
        ...dataChart,
        ...newDetails,
    });

    const [active, setActive] = useState(false);
    const [dataChart, setDataChart] = useReducer(
        dataChartReducer,
        initDataChart
    );

    useEffect(() => {
        setDataChart({
            labels: getLabelsForChart(countBars, dates),
            data: getDataForChart(countBars, exercises, getTotalSumSet),
        });
    }, [countBars, exercises, dates]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget;

        if (!button.classList.contains('active')) {
            if (button.innerHTML === 'Вес') {
                setDataChart({
                    data: getDataForChart(countBars, exercises, getMaxWeigth),
                    currentItem: 'maxWeight',
                });
            } else {
                setDataChart({
                    data: getDataForChart(countBars, exercises, getTotalSumSet),
                    currentItem: 'totalSum',
                });
            }

            setActive(!active);
        }
    };

    const dataBar = {
        labels: dataChart.labels,
        datasets: [
            {
                label: '',
                data: dataChart.data,
                backgroundColor: '#606060',
                borderColor: '#606060',
                borderRadius: 3,
                barPercentage: 0.5,
            },
        ],
    };

    const optionsBar = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text:
                    dataChart.currentItem === 'totalSum'
                        ? 'Выполенный объем'
                        : 'Максимальный вес',
            },
        },
    };

    return (
        <div className={'chart-sets__wrapper'}>
            <div className={'chart-sets__buttons'}>
                <MyButton
                    className={getActiveStyles(!active)}
                    onClick={handleClick}>
                    Объем
                </MyButton>
                <MyButton
                    className={getActiveStyles(active)}
                    onClick={handleClick}>
                    Вес
                </MyButton>
            </div>

            <Bar width={361} height={220} data={dataBar} options={optionsBar} />
        </div>
    );
};
