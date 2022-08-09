import { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Radio, Select } from 'antd';
import { useAppDispatch } from 'hooks/useRedux';
import { IGroupExercises, IExerciseStorage } from 'shared/models/index';
import { set_is_fetch_groups_exercises } from 'store/reducers/fetch';
import { _update_group_exercises } from 'store/actions';
import { copyObject } from 'shared/utils/CopyObject';

import ModalForm from 'shared/components/ui/Modal/ModalForm';
import styles from './modal-add-exercise.module.scss';

interface ModalAddExerciseProps {
    isOpen: boolean;
    setOpen: (arg1: boolean) => void;
    userId: string | null;
    exercises: IGroupExercises[];
}

const ModalAddExercise: FC<ModalAddExerciseProps> = ({
    isOpen,
    setOpen,
    userId,
    exercises,
}) => {
    const dispatch = useAppDispatch();
    const options = [
        { label: 'Базовое', value: 'basic' },
        { label: 'Вспомогательное', value: 'auxiliary' },
        { label: 'Корректирующее', value: 'corrective' },
    ];

    const formik = useFormik({
        initialValues: {
            group: '',
            type: 'corrective',
            name: '',
        },
        enableReinitialize: true,

        validationSchema: Yup.object().shape({
            group: Yup.string().required('Обязательное поле'),
            name: Yup.string().trim().required('Обязательное поле'),
        }),
        validateOnBlur: false,
        validateOnChange: false,

        onSubmit: (values, { setSubmitting, resetForm }) => {
            let newId = 0;
            const group: IGroupExercises = copyObject(
                exercises.find((group) => group.name === values.group)
            );

            group?.list.forEach((exercise: IExerciseStorage) => {
                if (newId < exercise.id) {
                    newId = exercise.id;
                }
            });

            const newExercise: IExerciseStorage = {
                id: ++newId,
                type: values.type,
                name: values.name,
            };
            group?.list.push(newExercise);

            if (userId && group) {
                dispatch(_update_group_exercises({ userId, group }));
                dispatch(set_is_fetch_groups_exercises(true));
                setSubmitting(false);
                resetForm();
                setOpen(false);
            }
        },
    });

    const handleReset = () => {
        formik.resetForm();
        setOpen(false);
    };

    return (
        <ModalForm
            isOpen={isOpen}
            isDisabledBtn={false}
            handleSubmit={formik.handleSubmit}
            handleReset={handleReset}>
            <div className={styles.title}>Мышечная группа</div>
            <Select
                value={formik.values.group}
                className={styles.select}
                onChange={(value) => formik.setFieldValue('group', value)}>
                {exercises.map((group: IGroupExercises) => (
                    <Select.Option
                        key={group.name}
                        value={group.name}
                        style={{ fontSize: 18, height: 35 }}>
                        {group.name}
                    </Select.Option>
                ))}
            </Select>
            {formik.errors.group && (
                <p style={{ marginTop: '5px' }} className={styles.error}>
                    {formik.errors.group}
                </p>
            )}

            <div className={styles.title}>Тип упражнения</div>
            <Radio.Group
                className={styles['radio-group']}
                options={options}
                {...formik.getFieldProps('type')}
                optionType="button"
                buttonStyle="solid"
                size="large"
            />

            <div className={styles.title}>Название упражнения</div>
            <input
                type="text"
                className={styles.input}
                {...formik.getFieldProps('name')}
            />
            {formik.errors.name && (
                <p className={styles.error}>{formik.errors.name}</p>
            )}
        </ModalForm>
    );
};
export default ModalAddExercise;
