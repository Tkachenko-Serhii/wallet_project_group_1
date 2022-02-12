import styles from './AuthPageWrapper.module.css';
export default function AuthPageWrapper({ children }) {
	return <div className={styles.authPageWrapper}>{children}</div>;
}
