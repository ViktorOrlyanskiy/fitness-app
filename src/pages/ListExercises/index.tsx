import { FC, useState } from "react";
import { useAppSelector } from "hooks";

import Header from "component/Header/Header";
import Footer from "component/Footer/Footer";
import Exercise from "./components/Exercise/Exercise";
import ExerciseActive from "./components/ExerciseActive/ExerciseActive";

import "./styles/ListExercises.scss";




const ListExercises: FC = () => {

    const [isActive, setActive] = useState<boolean>(false);
    const listExercises = useAppSelector(state => state.listExercises);


    return (
        <div className="list-exercises">
            <Header
                previousPage={'/current-workout'}
                btnReight={'pencil'}
                btnEvent={() => isActive ? setActive(false) : setActive(true)}
                children={'Список упражнений'}
            />

            <div className='list-exercise__body'>
                {(listExercises.length > 0) && (
                    isActive
                        ? listExercises.map(exercise => <ExerciseActive key={exercise.id} {...exercise} />)
                        : listExercises.map(exercise => <Exercise key={exercise.id} {...exercise} />)
                )}
            </div>

            <Footer nextPage={'add-exercise'}>Добавить упражение</Footer>
        </div>
    );
};
export default ListExercises;