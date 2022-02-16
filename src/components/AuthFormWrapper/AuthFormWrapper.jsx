import styles from './AuthFormWrapper.module.css';
import Logo from '../Logo';

export default function AuthFormWrapper({ children }) {
	return (
		<div className={styles.blurBackgroundWrapper}>
			<div className={styles.formWrapper}>
				<Logo />
				{children}
			</div>
		</div>
	);
}
