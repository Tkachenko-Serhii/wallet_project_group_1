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
	const INITIAL_FORM_VALUES = {
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	const INITIAL_IS_FIELD_FILLED_VALUES = {
		name: false,
		email: false,
		password: false,
		confirmPassword: false
	};

	const PROGRESS_VALUES = {
		zero: 0,
		diff: 25,
		hundred: 100
	};

	const [progress, setProgress] = useState(PROGRESS_VALUES.zero);
	const [isFieldFilled, setFieldFilled] = useState(
		INITIAL_IS_FIELD_FILLED_VALUES
	);

	//========== Formik logic=============

	const formik = useFormik({
		initialValues: INITIAL_FORM_VALUES,
		validationSchema: registerFormValidationSchema,
		onSubmit: (values) => {
			const { name, email, password } = values;
			console.log({
				name,
				email,
				password
			});
			formik.handleReset();
			setProgress(0);
			setFieldFilled(INITIAL_IS_FIELD_FILLED_VALUES);
		}
	});

	//========== end of Formik logic ==========

	//========== progress bar logic ===========

	const increaseProgress = (objKey, inputName) => {
		if (!formik.values[inputName].trim()) {
			setProgress(progress - PROGRESS_VALUES.diff);
			setFieldFilled((prevState) => ({
				...prevState,
				[objKey]: !prevState[objKey]
			}));
		}
	};

	const decreaseProgress = (objKey, inputName) => {
		if (formik.values[inputName].trim()) {
			setProgress(progress + PROGRESS_VALUES.diff);
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

		if (progress < PROGRESS_VALUES.zero) {
			setProgress(PROGRESS_VALUES.zero);
		}

		if (progress > PROGRESS_VALUES.hundred) {
			setProgress(PROGRESS_VALUES.hundred);
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
