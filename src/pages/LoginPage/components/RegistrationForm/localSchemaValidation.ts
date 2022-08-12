import * as yup from 'yup';

const isNullOrUndefined = function (value: string | undefined) {
    return value === null || value === undefined;
};

const localSchemaValidation = yup
    .object()
    .shape({
        email: yup
            .string()
            .trim()
            .lowercase()
            .email('Введите email')
            .required('Обязательное поле'),
        password: yup
            .string()
            .trim()
            .min(6, 'Минимум 6 символов')
            .test('minNum', 'Минимум 1 цифра', (val) => {
                return (
                    isNullOrUndefined(val) ||
                    (val?.match(/[0-9]/g) || []).length > 0
                );
            })
            .test('minLet', 'Минимум 1 буква', (val) => {
                return (
                    isNullOrUndefined(val) ||
                    (val?.match(/[a-zA-z]/g) || []).length > 0
                );
            })
            .required('Обязательное поле'),
        repeatPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
    })
    .required();

export default localSchemaValidation;
