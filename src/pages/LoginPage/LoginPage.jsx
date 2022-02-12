import { useFormik } from 'formik';
import AuthPageWrapper from '../../components/AuthPageWrapper';
import AuthFormWrapper from '../../components/AuthFormWrapper/AuthFormWrapper';
import AuthForm from '../../components/AuthForm';
import {
	EmailInputWithFormik,
	PasswordInputWithFormik
} from '../../components/Inputs';

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
		</AuthPageWrapper>
	);
}
