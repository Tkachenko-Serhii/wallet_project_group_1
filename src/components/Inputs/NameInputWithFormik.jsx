import { InputAdornment } from '@mui/material';
import { AccountBox as AccountBoxIcon } from '@mui/icons-material';

import CustomTextFiledStyled from './CustomTextFiledStyled';

export default function NameInputWithFormik({ formik, autoFocus = false }) {
	return (
		<CustomTextFiledStyled
			fullWidth
			type="text"
			id="name"
			name="name"
			placeholder="Your name"
			variant="standard"
			onChange={formik.handleChange}
			value={formik.values.name}
			error={formik.touched.name && Boolean(formik.errors.name)}
			helperText={formik.touched.name && formik.errors.name}
			autoFocus={autoFocus}
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<AccountBoxIcon />
					</InputAdornment>
				)
			}}
		/>
	);
}
