import styles from './AuthMedia.module.css';

export default function AuthMedia({ className }) {
	return (
		<div className={styles.authMediaWrapper}>
			<div className={`${styles.authMediaImage} ${className}`}></div>
			<div className={styles.textContainer}>
				<p className={styles.text}>Finance App</p>
			</div>
		</div>
	);
}
