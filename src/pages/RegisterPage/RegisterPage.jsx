import { useFormik } from 'formik';
import Media from 'react-media';
import AuthMedia from '../../components/Auth/AuthMedia';
import AuthPageWrapper from '../../components/Auth/AuthPageWrapper';
import AuthFormWrapper from '../../components/Auth/AuthFormWrapper';
import AuthForm from '../../components/Auth/AuthForm';
import {
	NameInputWithFormik,
	EmailInputWithFormik,
	PasswordInputWithFormik
} from '../../components/Inputs';

import styles from './RegisterPage.module.css';

import { registerFormValidationSchema } from '../../utils';

const initialValues = {
	name: '',
	email: '',
	password: '',
	confirmPassword: ''
};
export default function RegisterPage() {
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
		<AuthPageWrapper>
			<Media
				query="(min-width: 768px)"
				render={() => <AuthMedia className={styles.bgImage} />}
			/>
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
		</AuthPageWrapper>
	);
}
