import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { URL } from 'shared/constants/URL';

import { SvgGenerator, variant } from 'shared/components/ui/SvgGenerator';
import './select-exercise.scss';

const SelectExercise: FC<{ name: string }> = React.memo(({ name }) => {
    const navigate = useNavigate();

    return (
        <div className="current-workout__exercise select-exercise">
            <button
                className="my-button"
                onClick={() => navigate(URL.current_exercises)}
                children={name}
            />
            <button className="my-button">
                <SvgGenerator id={variant.chart} />
            </button>
        </div>
    );
});
export default SelectExercise;
