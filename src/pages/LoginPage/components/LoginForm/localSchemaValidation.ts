import * as yup from 'yup';

const localSchemaValidation = yup
    .object()
    .shape({
        email: yup
            .string()
            .trim()
            .lowercase()
            .email('Введите email')
            .required('Обязательное поле'),
        password: yup.string().required('Обязательное поле'),
    })
    .required();

export default localSchemaValidation;
