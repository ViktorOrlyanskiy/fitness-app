import * as Yup from 'yup';

const localSchemaValidation = Yup.object()
    .shape({
        email: Yup.string()
            .trim()
            .lowercase()
            .email('Введите email')
            .required('Обязательное поле'),
        password: Yup.string().required('Обязательное поле'),
    })
    .required();

export default localSchemaValidation;
