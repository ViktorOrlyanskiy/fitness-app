import * as Yup from 'yup';

const localSchemaValidation = Yup.object()
    .shape({
        group: Yup.string().required('Обязательное поле'),
        name: Yup.string().trim().required('Обязательное поле'),
    })
    .required();

export default localSchemaValidation;
