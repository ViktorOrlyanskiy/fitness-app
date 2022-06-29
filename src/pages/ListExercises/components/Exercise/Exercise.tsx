import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "hooks";
import { IExercise } from "types/index";
import { change_exercise } from "store/listExercises";

import { SvgGenerator, svgVariant } from "component/UI/SvgGenerator/SvgGenerator";
import "./Exercise.scss";


interface ExerciseProps extends IExercise { }


const Exercise: FC<ExerciseProps> = ({ id, name, isActive, sets }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const changeExercise = () => {
        dispatch(change_exercise(id));
        navigate('/current-workout')
    };

    const getActiveExercise = (status: boolean) => {
        return ((status)
            ? <div className="exercise__active exercise__active_active">
                <SvgGenerator id={svgVariant.circleCheck} />
            </div>
            : <div className="exercise__active"></div>
        )
    };

    return (
        <div
            className="exercise"
            onClick={changeExercise}
        >
            {getActiveExercise(isActive)}
            <div className="exercise__title">{name}</div>
            <div className="exercise__amount-sets">{sets?.length}</div>
        </div>
    );
};
export default Exercise;