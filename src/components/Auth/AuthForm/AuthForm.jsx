import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
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
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <form
      className={styles.authForm}
      onSubmit={formik.handleSubmit}
      autoComplete="off"
    >
      <div className={styles.inputsWrapper}>{children}</div>
      <div className={styles.btnGroup}>
        <Button text={t(primaryBtnText)} />
        <Button
          type="button"
          text={t(secondaryBtnText)}
          color="white"
          onClick={() => navigate(navigateTo)}
        />
      </div>
    </form>
  );
}

AuthForm.propTypes = {
  formik: PropTypes.shape({}).isRequired,
  primaryBtnText: PropTypes.string.isRequired,
  secondaryBtnText: PropTypes.string.isRequired,
  navigateTo: PropTypes.string.isRequired
};
