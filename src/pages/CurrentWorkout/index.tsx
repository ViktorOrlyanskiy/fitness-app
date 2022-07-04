import { FC } from 'react';
import { IExercise, ISet } from 'types';

import Footer from 'component/Footer/Footer';
import HeaderWorkout from './components/HeaderWorkout/HeaderWorkout';
import Set from './components/Set/Set';

import "./styles/CurrentWorkout.scss";
import { useAppSelector } from 'hooks';


const CurrentWorkout: FC = () => {

    const listExercises = useAppSelector(state => state.listExercises)
    const activeExercise = listExercises.filter(exercise => exercise.isActive)[0];
    const sets = activeExercise?.sets;


    return (
        <div className="current-workout">
            <HeaderWorkout
                name={(activeExercise) ? activeExercise.name : 'Добавить упражение'}
            />
            {(sets && sets.length > 0) && (
                sets.map((set, index) =>
                    <Set key={set.id} index={++index} {...set} />
                )
            )}
            <Footer nextPage={'add-set'}>Добавить подход</Footer>
        </div >
    )
};

export default CurrentWorkout;