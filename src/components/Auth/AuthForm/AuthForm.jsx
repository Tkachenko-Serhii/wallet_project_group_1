import { useNavigate } from 'react-router-dom';
import Button from '../../Button';
import styles from './AuthForm.module.css';

export default function AuthForm({
	formik,
	children,
	primaryBtnText,
	secondaryBtnText,
	navigateTo
}) {
	const navigate = useNavigate();

	return (
		<form
			className={styles.authForm}
			onSubmit={formik.handleSubmit}
			autoComplete="off"
		>
			{children}
			<div className={styles.btnGroup}>
				<Button text={primaryBtnText} />
				<Button
					type="button"
					text={secondaryBtnText}
					color="white"
					onClick={() => navigate(navigateTo)}
				/>
			</div>
		</form>
	);
}
