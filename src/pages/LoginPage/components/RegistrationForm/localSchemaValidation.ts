import * as Yup from 'yup';

const isNullOrUndefined = function (value: string | undefined) {
    return value === null || value === undefined;
};

const localSchemaValidation = Yup.object()
    .shape({
        email: Yup.string()
            .trim()
            .lowercase()
            .email('Введите email')
            .required('Обязательное поле'),
        password: Yup.string()
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
        repeatPassword: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'Пароли не совпадают'
        ),
    })
    .required();

export default localSchemaValidation;
