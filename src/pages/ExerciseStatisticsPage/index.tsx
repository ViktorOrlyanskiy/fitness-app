import { FC } from 'react';
import Header from 'shared/components/Header';
import { URL } from 'shared/constants/URL';
import './exercise-statistics.scss';

const ExerciseStatistics: FC = ({}) => {
    return (
        <div className="exercise-statistics">
            {/* <Header
                previousPage={URL.current_workout}
                children={'Статистика'}
            /> */}
            <div className="page-container"></div>
        </div>
    );
};
export default ExerciseStatistics;
