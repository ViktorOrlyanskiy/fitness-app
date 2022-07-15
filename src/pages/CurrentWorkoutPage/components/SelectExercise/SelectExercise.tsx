import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { SvgGenerator, svgVariant } from "component/UI/SvgGenerator/SvgGenerator";
import "./SelectExercise.scss";




const SelectExercise: FC<{ name: string }> = ({ name }) => {
    const navigate = useNavigate();

    return (
        <div className="current-workout__exercise select-exercise">
            <button
                className="my-button"
                onClick={() => navigate('/list-exercises')}
                children={name}
            />
            <button className="my-button">
                <SvgGenerator id={svgVariant.chart} />
            </button>
        </div>
    );
};
export default SelectExercise;