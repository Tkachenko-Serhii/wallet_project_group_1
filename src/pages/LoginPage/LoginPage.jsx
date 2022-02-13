import { useFormik } from 'formik';
import Media from 'react-media';
import AuthMedia from '../../components/Auth/AuthMedia';
import AuthPageWrapper from '../../components/Auth/AuthPageWrapper';
import AuthFormWrapper from '../../components/Auth/AuthFormWrapper';
import AuthForm from '../../components/Auth/AuthForm';
import {
	EmailInputWithFormik,
	PasswordInputWithFormik
} from '../../components/Inputs';

import styles from './LoginPage.module.css';

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
			<Media
				query="(min-width: 768px)"
				render={() => <AuthMedia className={styles.bgImage} />}
			/>
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
