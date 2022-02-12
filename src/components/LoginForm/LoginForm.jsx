import AuthForm from '../AuthForm';
import styles from './LoginForm.module.css';

import Logo from '../Logo';
import { EmailInputWithFormik, PasswordInputWithFormik } from '../Inputs';

export default function LoginForm({ formik }) {
	return (
		<div className={styles.blurBackgroundWrapper}>
			<div className={styles.formWrapper}>
				<Logo />
				<AuthForm formik={formik}>
					<EmailInputWithFormik formik={formik} autoFocus={true} />
					<PasswordInputWithFormik
						onChange={formik.handleChange}
						value={formik.values.password}
						error={formik.touched.password && Boolean(formik.errors.password)}
						helperText={formik.touched.password && formik.errors.password}
						placeholder="Password"
					/>
				</AuthForm>
			</div>
		</div>
	);
}
