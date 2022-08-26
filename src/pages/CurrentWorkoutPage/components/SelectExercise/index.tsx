import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { URL } from 'shared/constants/URL';
import { SvgGenerator, variant } from 'shared/components/ui/SvgGenerator';
import styles from './select-exercise.module.scss';

const SelectExercise: FC<{ name: string }> = React.memo(({ name }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <button
                className={styles.btn}
                onClick={() => navigate(URL.exercise_statistics)}>
                <SvgGenerator id={variant.chart} />
            </button>
            <button
                className={styles.btn}
                onClick={() => navigate(URL.current_exercises)}
                children={name}
            />
            <button
                className={styles.btn}
                onClick={() => navigate(URL.form_add_set)}>
                <SvgGenerator id={variant.plus} />
            </button>
        </div>
    );
});
export default SelectExercise;
