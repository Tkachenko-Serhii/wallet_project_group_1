import logoImg from '../../images/logo/logoImg.png';
import styles from './Logo.module.css';

export default function Logo() {
	return (
		<div className={styles.logoWrapper}>
			<img
				className={styles.logoImg}
				src={logoImg}
				alt="logo"
				width="40"
				height="40"
			/>
			<p className={styles.logoText}>Wallet</p>
		</div>
	);
}
