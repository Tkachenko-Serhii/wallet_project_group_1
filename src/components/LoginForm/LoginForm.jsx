import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import * as yup from 'yup';
import styles from './LoginForm.module.css';

import Logo from '../Logo';
import { EmailInputWithFormik, PasswordInputWithFormik } from '../Inputs';

import { emailRegExp, passwordRegExp } from '../../utils';

const initialValues = {
	email: '',
	password: ''
};

export default function LoginForm() {
	const navigate = useNavigate();
	const validationSchema = yup.object().shape({
		email: yup
			.string('Enter your email')
			.matches(emailRegExp, 'Enter valid email such as emample@mail.com')
			.required('Email is required'),
		password: yup
			.string('Enter your password')
			.matches(
				passwordRegExp,
				'Password should contains minimum 8 and maximum 12 characters and at least one uppercase letter, one lowercase letter, one number and one special character of @, $, !, %, *, ?, &'
			)
			.required('Password is required')
	});
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => console.log(values)
	});

	return (
		<div className={styles.blurBackgroundWrapper}>
			<div className={styles.formWrapper}>
				<Logo />
				<form
					className={styles.loginForm}
					onSubmit={formik.handleSubmit}
					autoComplete="off"
				>
					<EmailInputWithFormik formik={formik} autoFocus={true} />
					<PasswordInputWithFormik
						onChange={formik.handleChange}
						value={formik.values.password}
						error={formik.touched.password && Boolean(formik.errors.password)}
						helperText={formik.touched.password && formik.errors.password}
						placeholder="Password"
					/>
					<div className={styles.btnGroup}>
						<Button color="primary" fullWidth type="submit" variant="contained">
							Login
						</Button>
						<Button
							color="primary"
							fullWidth
							type="button"
							variant="outlined"
							onClick={() => navigate('/register')}
						>
							Register
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
