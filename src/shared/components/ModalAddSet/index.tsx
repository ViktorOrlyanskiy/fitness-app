import { FC, useRef } from 'react';
import { useFormik } from 'formik';
import { useOutsideClick } from 'hooks/useOutsideClick';
import MyInput from 'shared/components/ui/MyInput';
import styles from './modal-add-set.module.scss';

interface ModalAddSetProps {
    isOpen: boolean;
    setOpen: (arg1: boolean) => void;
}

const ModalAddSet: FC<ModalAddSetProps> = ({ isOpen, setOpen }) => {
    const modalRef = useRef<any>(null);
    useOutsideClick(modalRef, isOpen, setOpen);

    const validate = (values: any) => {
        const errors: any = {};

        if (!values.weight) {
            errors.weight = 'Обязательное поле';
        }

        if (!values.amount) {
            errors.amount = 'Обязательное поле';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: { weight: '', amount: '', comment: '' },
        validate,
        onSubmit: (values, { setSubmitting, resetForm }) => {
            console.log(values);

            setSubmitting(false);
            resetForm();
            setOpen(false);
        },
    });

    return (
        <div
            ref={modalRef}
            className={
                isOpen ? `${styles.modal} ${styles.active}` : styles.modal
            }>
            <form onSubmit={formik.handleSubmit} autoComplete="off">
                <div className={styles.body}>
                    <MyInput
                        type="tel"
                        label="Вес (кг)"
                        placeholder="0"
                        {...formik.getFieldProps('weight')}
                    />

                    <MyInput
                        type="tel"
                        label="Повторения (раз)"
                        placeholder="0"
                        {...formik.getFieldProps('amount')}
                    />

                    <MyInput
                        type="text"
                        label="Комментарий"
                        placeholder="напр. Разминочный"
                        {...formik.getFieldProps('comment')}
                    />
                </div>

                <button
                    type="submit"
                    disabled={
                        !formik.dirty || Object.keys(formik.errors).length >= 1
                    }
                    className={styles.btn}>
                    Сохранить
                </button>
            </form>
            <button className={styles.btn} onClick={() => setOpen(false)}>
                Отмена
            </button>
        </div>
    );
};
export default ModalAddSet;
