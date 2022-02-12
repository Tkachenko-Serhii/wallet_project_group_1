import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import styles from './AuthForm.module.css';

export default function AuthForm({ formik, children }) {
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
	);
}
