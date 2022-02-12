import { useState } from 'react';
import { InputAdornment, IconButton } from '@mui/material';
import {
	Lock as LockIcon,
	Visibility as VisibilityIcon,
	VisibilityOff as VisibilityOffIcon
} from '@mui/icons-material';

import CustomTextFieldStyled from './CustomTextFiledStyled';

export default function PasswordInputWithFormik({ formik }) {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	const handleMouseDownPassword = (event) => event.preventDefault();
	return (
		<CustomTextFieldStyled
			fullWidth
			type={showPassword ? 'text' : 'password'}
			id="password"
			name="password"
			placeholder="Password"
			variant="standard"
			onChange={formik.handleChange}
			value={formik.values.password}
			error={formik.touched.password && Boolean(formik.errors.password)}
			helperText={formik.touched.password && formik.errors.password}
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<LockIcon />
					</InputAdornment>
				),
				endAdornment: (
					<InputAdornment position="end">
						<IconButton
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
						>
							{showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
						</IconButton>
					</InputAdornment>
				)
			}}
		/>
	);
}
