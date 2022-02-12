import { useFormik } from 'formik';
import * as yup from 'yup';
import { InputAdornment, TextField, Button } from '@mui/material';
import { Email as EmailIcon, Lock as LockIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css';
import { emailRegExp, passwordRegExp } from '../../utils';

import Logo from '../Logo';

const initialValues = {
	email: '',
	password: ''
};

export default function LoginForm() {
	const navigate = useNavigate();
	const validationSchema = yup.object().shape({
		email: yup
			.string('Enter your email')
			.matches(emailRegExp, 'Enter valid email')
			.required('Email is required'),
		password: yup
			.string('Enter your password')
			.matches(
				passwordRegExp,
				'Password should contains minimum 8 and maximum 12 characters and at least one uppercase letter, one lowercase letter, one number and one special character'
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
					<TextField
						fullWidth
						type="email"
						id="email"
						name="email"
						placeholder="Email"
						variant="standard"
						onChange={formik.handleChange}
						value={formik.values.email}
						error={formik.touched.email && Boolean(formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<EmailIcon />
								</InputAdornment>
							)
						}}
					/>
					<TextField
						fullWidth
						type="password"
						id="password"
						name="password"
						placeholder="Password"
						variant="standard"
						onChange={formik.handleChange}
						value={formik.values.password}
						error={formik.touched.password && Boolean(formik.errors.password)}
						helperText={formik.touched.password && formik.errors.password}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<LockIcon />
								</InputAdornment>
							)
						}}
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
