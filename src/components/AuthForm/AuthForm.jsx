import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
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
				<Button color="primary" fullWidth type="submit" variant="contained">
					{primaryBtnText}
				</Button>
				<Button
					color="primary"
					fullWidth
					type="button"
					variant="outlined"
					onClick={() => navigate(navigateTo)}
				>
					{secondaryBtnText}
				</Button>
			</div>
		</form>
	);
}
