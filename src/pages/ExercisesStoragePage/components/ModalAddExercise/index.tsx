import { FC, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useOutsideClick } from 'hooks/useOutsideClick';
import styles from './modal-add-exercise.module.scss';

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

    return (
        <div
            ref={modalRef}
            className={
                isOpen ? `${styles.modal} ${styles.active}` : styles.modal
            }>
            <form onSubmit={formik.handleSubmit} autoComplete="off">
                <div className={styles.body}></div>

                <button
                    type="submit"
                    // disabled={}
                    className={styles.btn}>
                    Сохранить
                </button>
                <button
                    type="reset"
                    className={styles.btn}
                    onClick={handleReset}>
                    Отмена
                </button>
            </form>
        </div>
    );
};
export default ModalAddExercise;
