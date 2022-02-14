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

export default function RegisterForm() {
	//========== Formik logic=============
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
	//========== end of Formik logic ==========

	//========== progress bar logic ===========
	const PROGRESS_VALUE = {
		zero: 0,
		diff: 25,
		hundred: 100
	};

	const [progress, setProgress] = useState(PROGRESS_VALUE.zero);
	const [isFieldFilled, setFieldFilled] = useState({
		name: false,
		email: false,
		password: false,
		confirmPassword: false
	});

	const increaseProgress = (objKey, inputName) => {
		if (!formik.values[inputName].trim()) {
			setProgress(progress - PROGRESS_VALUE.diff);
			setFieldFilled((prevState) => ({
				...prevState,
				[objKey]: !prevState[objKey]
			}));
		}
	};

	const decreaseProgress = (objKey, inputName) => {
		if (formik.values[inputName].trim()) {
			setProgress(progress + PROGRESS_VALUE.diff);
			setFieldFilled((prevState) => ({
				...prevState,
				[objKey]: !prevState[objKey]
			}));
		}
	};

	const handleProgressChange = (objKey, objKeyValue, inputName) => {
		if (objKey.includes(inputName)) {
			if (objKeyValue) {
				increaseProgress(objKey, inputName);
			} else {
				decreaseProgress(objKey, inputName);
			}
		}

		if (progress < PROGRESS_VALUE.zero) {
			setProgress(PROGRESS_VALUE.zero);
		}

		if (progress > PROGRESS_VALUE.hundred) {
			setProgress(PROGRESS_VALUE.hundred);
		}
	};

	const handleBlur = (event) => {
		const { name: inputName } = event.target;

		for (const key in isFieldFilled) {
			if (Object.hasOwnProperty.call(isFieldFilled, key)) {
				const keyValue = isFieldFilled[key];
				handleProgressChange(key, keyValue, inputName);
			}
		}
	};
	//================ end of progress bar logic ===============

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
					<ProgressBar progress={progress} />
				</div>
			</AuthForm>
		</AuthFormWrapper>
	);
}
