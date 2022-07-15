import { FC } from "react";
import { SvgGenerator, svgVariant } from "component/UI/SvgGenerator/SvgGenerator";
import "../styles/Workout.scss";


interface WorkoutProps {
    name: string;
    date: string;
}

const Workout: FC<WorkoutProps> = ({ name, date }) => {


    return (
        <div className="workout">
            <div className="workout__status">
                <SvgGenerator id={svgVariant.circleCheck} />
            </div>
            <div className="workout__title">{name}</div>
            <div className="workout__date">{date}</div>
        </div>
    );
};
export default Workout;