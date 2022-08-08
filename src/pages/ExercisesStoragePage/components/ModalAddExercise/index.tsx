import { FC, useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useOutsideClick } from 'hooks/useOutsideClick';
import styles from './modal-add-exercise.module.scss';
import ModalForm from 'shared/components/ui/Modal/ModalForm';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { Select } from 'antd';
import { exercises } from 'shared/constants/exercises';
import { IGroupExercises } from 'shared/types';
import { BackgroundModal } from 'shared/components/ui/BackgroundModal';

interface ModalAddExerciseProps {
    isOpen: boolean;
    setOpen: (arg1: boolean) => void;
}

const ModalAddExercise: FC<ModalAddExerciseProps> = ({ isOpen, setOpen }) => {
    const modalRef = useRef<any>(null);
    useOutsideClick(modalRef, isOpen, setOpen);

    const formik = useFormik({
        initialValues: {},
        enableReinitialize: true,

        validationSchema: Yup.object().shape({}),
        validateOnBlur: false,
        validateOnChange: false,

        onSubmit: (values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            resetForm();
            setOpen(false);
        },
    });

    const handleReset = () => {
        formik.resetForm();
        setOpen(false);
    };

    const options = [
        { label: 'Базовое', value: 'Базовое' },
        { label: 'Вспомогательное', value: 'Вспомогательное' },
        { label: 'Корректирующее', value: 'Корректирующее' },
    ];

    const [value4, setValue4] = useState('Базовое');

    const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
        console.log('radio4 checked', value);
        setValue4(value);
    };

    const { Option } = Select;

    exercises.forEach((group: IGroupExercises) => {
        // console.log(group.name);
    });

    return (
        <>
            <ModalForm
                isOpen={isOpen}
                setOpen={setOpen}
                isDisabledBtn={false}
                handleSubmit={formik.handleSubmit}
                handleReset={handleReset}>
                <div className={styles.title}>Мышечная группа</div>
                <Select
                    className={styles.select}
                    onChange={() => console.log(1)}>
                    {exercises.map((group: IGroupExercises) => (
                        <Option
                            value={group.name}
                            style={{ fontSize: 18, height: 35 }}>
                            {group.name}
                        </Option>
                    ))}
                </Select>
                <div className={styles.title}>Тип упражнения</div>
                <Radio.Group
                    className={styles['radio-group']}
                    options={options}
                    onChange={onChange4}
                    value={value4}
                    optionType="button"
                    buttonStyle="solid"
                    size="large"
                />
                <div className={styles.title}>Название упражнения</div>
                <input type="text" className={styles.input} />
            </ModalForm>
            <BackgroundModal active={isOpen} />
        </>
    );
};
export default ModalAddExercise;
