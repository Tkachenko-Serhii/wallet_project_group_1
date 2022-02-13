import { useFormik } from 'formik';

import AuthFormWrapper from '../AuthFormWrapper';
import AuthForm from '../AuthForm';
import { EmailInputWithFormik, PasswordInputWithFormik } from '../../Inputs';

import { loginFormValidationSchema } from '../../../utils';

export default function LoginForm() {
	const initialValues = {
		email: '',
		password: ''
	};

	const formik = useFormik({
		initialValues,
		validationSchema: loginFormValidationSchema,
		onSubmit: (values) => console.log(values)
	});

	return (
		<AuthFormWrapper>
			<AuthForm
				formik={formik}
				primaryBtnText="login"
				secondaryBtnText="register"
				navigateTo="/register"
			>
				<EmailInputWithFormik formik={formik} autoFocus />
				<PasswordInputWithFormik
					id="password"
					name="password"
					onChange={formik.handleChange}
					value={formik.values.password}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
					placeholder="Password"
				/>
			</AuthForm>
		</AuthFormWrapper>
	);
}
