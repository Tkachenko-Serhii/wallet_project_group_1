import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { InputAdornment } from '@mui/material';
import CustomTextFiledStyled from './CustomTextFiledStyled';
import { Email as EmailIcon } from '@mui/icons-material';

export default function EmailInputWithFormik({
  formik,
  autoFocus = false,
  onBlur
}) {
  const { t, i18n } = useTranslation();
  const isInputError =
    (formik.touched.email || Boolean(formik.values.email)) &&
    Boolean(formik.errors.email);

  const shouldErrorTextDisplayed =
    formik.touched.email || Boolean(formik.values.email);

  return (
    <CustomTextFiledStyled
      fullWidth
      type="email"
      id="email"
      name="email"
      placeholder={t('email')}
      variant="standard"
      onChange={formik.handleChange}
      onBlur={onBlur}
      value={formik.values.email}
      error={isInputError}
      helperText={(shouldErrorTextDisplayed && formik.errors.email) || ' '}
      autoFocus={autoFocus}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <EmailIcon />
          </InputAdornment>
        )
      }}
    />
  );
}

EmailInputWithFormik.propTypes = {
  formik: PropTypes.shape({}).isRequired,
  autoFocus: PropTypes.bool,
  onBlur: PropTypes.func
};
