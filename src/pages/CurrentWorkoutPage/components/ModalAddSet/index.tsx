import { FC, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { useOutsideClick } from 'hooks/useOutsideClick';
import { useInputAutofocus } from 'hooks/useInputAutofocus';
import { add_set, edit_set } from 'store/reducers/listExercises';
import { clear_service_set } from 'store/reducers/editSet';

import MyInput, { MyInputFocus } from 'shared/components/ui/MyInput';
import { ISet } from 'shared/models';
import ModalForm from 'shared/components/ui/Modal/ModalForm';
import styles from './modal-add-set.module.scss';

interface ModalAddSetProps {
    isOpen: boolean;
    setOpen: (arg1: boolean) => void;
}

const ModalAddSet: FC<ModalAddSetProps> = ({ isOpen, setOpen }) => {
    const dispatch = useAppDispatch();
    const set = useAppSelector((state) => state.editSet);

    const inputRef = useInputAutofocus(isOpen);
    const modalRef = useRef<any>(null);
    useOutsideClick(modalRef, isOpen, setOpen);

    const formik = useFormik({
        initialValues: {
            weight: set.weight || '',
            amount: set.amount || '',
            comment: set.comment || '',
        },
        enableReinitialize: true,

        validationSchema: Yup.object().shape({
            weight: Yup.number()
                .typeError('Только число')
                .positive('Только положительное')
                .required('Обязательное поле'),
            amount: Yup.number()
                .typeError('Только число')
                .positive('Только положительное')
                .required('Обязательное поле'),
        }),
        validateOnBlur: false,
        validateOnChange: false,

        onSubmit: (values, { setSubmitting, resetForm }) => {
            const newSet: ISet = {
                id: set.id ? set.id : Date.now(),
                weight: values.weight,
                amount: values.amount,
                comment: values.comment.trim(),
            };
            if (set.id) {
                dispatch(edit_set(newSet));
                dispatch(clear_service_set());
            } else {
                dispatch(add_set(newSet));
            }
            setSubmitting(false);
            resetForm();
            setOpen(false);
        },
    });

    const handleReset = () => {
        formik.resetForm();
        setOpen(false);
        if (set.id) dispatch(clear_service_set());
    };

    return (
        <ModalForm
            modalRef={modalRef}
            isOpen={isOpen}
            isDisabledBtn={!formik.values.weight || !formik.values.amount}
            handleSubmit={formik.handleSubmit}
            handleReset={handleReset}>
            <MyInputFocus
                type="tel"
                label="Вес (кг)"
                placeholder="0"
                inputRef={inputRef}
                {...formik.getFieldProps('weight')}
            />
            {formik.errors.weight && (
                <p className={styles.error}>{formik.errors.weight}</p>
            )}
            <MyInput
                type="tel"
                label="Повторения (раз)"
                placeholder="0"
                {...formik.getFieldProps('amount')}
            />
            {formik.errors.amount && (
                <p className={styles.error}>{formik.errors.amount}</p>
            )}
            <MyInput
                type="text"
                label="Комментарий"
                placeholder="напр. Разминочный"
                {...formik.getFieldProps('comment')}
            />
        </ModalForm>
    );
};
export default ModalAddSet;
