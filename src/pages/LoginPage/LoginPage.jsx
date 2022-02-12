import { useFormik } from 'formik';

import AuthPageWrapper from '../../components/AuthPageWrapper';
import LoginForm from '../../components/LoginForm/LoginForm';

import { loginFormValidationSchema } from '../../utils';

const initialValues = {
	email: '',
	password: ''
};
export default function LoginPage() {
	const formik = useFormik({
		initialValues,
		validationSchema: loginFormValidationSchema,
		onSubmit: (values) => console.log(values)
	});

	return (
		<AuthPageWrapper>
			<LoginForm formik={formik} />
		</AuthPageWrapper>
	);
}
