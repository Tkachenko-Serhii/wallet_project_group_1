import * as yup from 'yup';


const formAddTransactionSchema = yup.object().shape({
    type: yup.string().required('type is required'),
    category: yup.string().required('choose a category'),
    money: yup.number('enter your sum')
        .min(0, 'sum must be positive')
        .required('sum is required'),
    date: yup.string(),
    comment: yup.string('enter your comment').max(
        20,
        'no more than 20 characters',
    ),
});

export default formAddTransactionSchema;