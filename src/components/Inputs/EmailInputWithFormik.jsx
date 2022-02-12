import { InputAdornment } from '@mui/material';
import CustomTextFiledStyled from './CustomTextFiledStyled';
import { Email as EmailIcon } from '@mui/icons-material';

export default function EmailInputWithFormik({ formik, autoFocus = false }) {
	return (
		<CustomTextFiledStyled
			fullWidth
			type="email"
			id="email"
			name="email"
			placeholder="Email"
			variant="standard"
			onChange={formik.handleChange}
			value={formik.values.email}
			error={formik.touched.email && Boolean(formik.errors.email)}
			helperText={formik.touched.email && formik.errors.email}
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
