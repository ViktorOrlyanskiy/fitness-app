import { FC } from 'react';
import { ISet } from 'types';

import Footer from 'component/Footer/Footer';
import HeaderWorkout from './components/HeaderWorkout/HeaderWorkout';
import Set from './components/Set/Set';

import "./styles/CurrentWorkout.scss";


const CurrentWorkout: FC = () => {

    const sets: ISet[] = [
        { id: 1, weight: 50, amount: 8, comment: 'приседания', },
        { id: 2, weight: 50, amount: 8, },
    ];

    return (
        <div className="current-workout">
            <HeaderWorkout />
            {(sets.length > 0) && (
                sets.map((set, index) =>
                    <Set key={set.id} index={++index} {...set} />
                )
            )}
            <Footer to={''}>Добавить подход</Footer>
        </div>
    )
};

export default CurrentWorkout;