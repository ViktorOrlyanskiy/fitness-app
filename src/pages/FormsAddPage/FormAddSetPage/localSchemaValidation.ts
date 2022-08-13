import * as Yup from 'yup';

const localSchemaValidation = Yup.object()
    .shape({
        weight: Yup.number()
            .typeError('Только число')
            .positive('Только положительное')
            .required('Обязательное поле'),
        amount: Yup.number()
            .typeError('Только число')
            .positive('Только положительное')
            .required('Обязательное поле'),
        comment: Yup.string().trim(),
    })
    .required();

export default localSchemaValidation;
