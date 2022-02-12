import * as yup from 'yup';
import emailRegExp from './emailRegExp';
import passwordRegExp from './passwordRegExp';

const loginFormValidationSchema = yup.object().shape({
	email: yup
		.string('Enter your email')
		.matches(emailRegExp, 'Enter valid email such as emample@mail.com')
		.required('Email is required'),
	password: yup
		.string('Enter your password')
		.matches(
			passwordRegExp,
			'Password should contains minimum 6 and maximum 12 characters and at least one uppercase letter, one lowercase letter, one number and one special character of @, $, !, %, *, ?, &'
		)
		.required('Password is required')
});

export default loginFormValidationSchema;
