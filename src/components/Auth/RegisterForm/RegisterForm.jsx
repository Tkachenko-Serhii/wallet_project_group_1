import { useState } from 'react';
import { useFormik } from 'formik';

import AuthFormWrapper from '../AuthFormWrapper';
import AuthForm from '../AuthForm';
import {
	NameInputWithFormik,
	EmailInputWithFormik,
	PasswordInputWithFormik
} from '../../Inputs';
import ProgressBar from '../../ProgressBar';

import styles from './RegisterForm.module.css';

import { registerFormValidationSchema } from '../../../utils';

const PROGRESS_VALUE = {
	zero: 0,
	diff: 25,
	hundred: 100
};

export default function RegisterForm() {
	const [progressState, setProgressState] = useState({
		progress: PROGRESS_VALUE.zero,
		isNameFilled: false,
		isEmailFilled: false,
		isPasswordFilled: false,
		isConfirmPasswordFilled: false
	});

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

	const handleProgressChange = (isFieldFilled, inputValue) => {
		if (progressState[isFieldFilled]) {
			if (!formik.values[inputValue].trim()) {
				setProgressState((prevState) => ({
					...prevState,
					progress: prevState.progress - PROGRESS_VALUE.diff,
					[isFieldFilled]: !prevState[isFieldFilled]
				}));
			}
		} else {
			if (formik.values[inputValue].trim()) {
				setProgressState((prevState) => ({
					...prevState,
					progress: prevState.progress + PROGRESS_VALUE.diff,
					[isFieldFilled]: !prevState[isFieldFilled]
				}));
			}
		}

		if (progressState.progress < PROGRESS_VALUE.zero) {
			setProgressState((prevState) => ({
				...prevState,
				progress: PROGRESS_VALUE.zero
			}));
		}

		if (progressState.progress > PROGRESS_VALUE.hundred) {
			setProgressState((prevState) => ({
				...prevState,
				progress: PROGRESS_VALUE.hundred
			}));
		}
	};

	const handleBlur = () => {
		handleProgressChange('isNameFilled', 'name');
		handleProgressChange('isEmailFilled', 'email');
		handleProgressChange('isPasswordFilled', 'password');
		handleProgressChange('isConfirmPasswordFilled', 'confirmPassword');
	};

	return (
		<AuthFormWrapper>
			<AuthForm
				formik={formik}
				primaryBtnText="register"
				secondaryBtnText="login"
				navigateTo="/login"
			>
				<NameInputWithFormik formik={formik} autoFocus onBlur={handleBlur} />
				<EmailInputWithFormik formik={formik} onBlur={handleBlur} />
				<PasswordInputWithFormik
					id="password"
					name="password"
					onChange={formik.handleChange}
					onBlur={handleBlur}
					value={formik.values.password}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
					placeholder="Password"
				/>
				<PasswordInputWithFormik
					id="confirmPassword"
					name="confirmPassword"
					onChange={formik.handleChange}
					onBlur={handleBlur}
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
				<div className={styles.progressBarWrapper}>
					<ProgressBar progress={progressState.progress} />
				</div>
			</AuthForm>
		</AuthFormWrapper>
	);
}
