import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Fade } from '@mui/material';

import styles from './AuthMedia.module.css';

export default function AuthMedia({ className }) {
  const { t, i18n } = useTranslation();
  return (
    <Fade in={true} timeout={500} mountOnEnter unmountOnExit>
      <div className={styles.authMediaWrapper}>
        <div className={`${styles.authMediaImage} ${className}`}></div>
        <div className={styles.textContainer}>
          <h2 className={styles.text}>{t('finance')}</h2>
        </div>
      </div>
    </Fade>
  );
}

AuthMedia.propTypes = {
  className: PropTypes.string.isRequired
};
