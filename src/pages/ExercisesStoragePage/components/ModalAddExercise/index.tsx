import { FC, Fragment, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useOutsideClick } from 'hooks/useOutsideClick';
import styles from './modal-add-exercise.module.scss';
import ModalForm from 'shared/components/ui/Modal/ModalForm';

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
        <ModalForm
            isOpen={isOpen}
            setOpen={setOpen}
            isDisabledBtn={false}
            handleSubmit={formik.handleSubmit}
            handleReset={handleReset}>
            <Fragment></Fragment>
        </ModalForm>
    );
};
export default ModalAddExercise;
