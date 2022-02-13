import { useFormik } from 'formik';

import AuthFormWrapper from '../AuthFormWrapper';
import AuthForm from '../AuthForm';
import {
	NameInputWithFormik,
	EmailInputWithFormik,
	PasswordInputWithFormik
} from '../../Inputs';

import { registerFormValidationSchema } from '../../../utils';

export default function RegisterForm() {
	const initialValues = {
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	const formik = useFormik({
		initialValues,
		validationSchema: registerFormValidationSchema,
		onSubmit: (values) => {
			const { name, email, password } = values;
			console.log({
				name,
				email,
				password
			});
		}
	});

	return (
		<AuthFormWrapper>
			<AuthForm
				formik={formik}
				primaryBtnText="register"
				secondaryBtnText="login"
				navigateTo="/login"
			>
				<NameInputWithFormik formik={formik} autoFocus />
				<EmailInputWithFormik formik={formik} />
				<PasswordInputWithFormik
					id="password"
					name="password"
					onChange={formik.handleChange}
					value={formik.values.password}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
					placeholder="Password"
				/>
				<PasswordInputWithFormik
					id="confirmPassword"
					name="confirmPassword"
					onChange={formik.handleChange}
					value={formik.values.confirmPassword}
					error={
						formik.touched.confirmPassword &&
						Boolean(formik.errors.confirmPassword)
					}
					helperText={
						formik.touched.confirmPassword && formik.errors.confirmPassword
					}
					placeholder="Confirm your password"
				/>
			</AuthForm>
		</AuthFormWrapper>
	);
}
