import { useState } from 'react';
import { InputAdornment, IconButton } from '@mui/material';
import {
	Lock as LockIcon,
	Visibility as VisibilityIcon,
	VisibilityOff as VisibilityOffIcon
} from '@mui/icons-material';

import CustomTextFieldStyled from './CustomTextFiledStyled';

export default function PasswordInputWithFormik({
	onChange,
	value,
	error,
	helperText,
	placeholder
}) {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	const handleMouseDownPassword = (event) => event.preventDefault();
	return (
		<CustomTextFieldStyled
			fullWidth
			type={showPassword ? 'text' : 'password'}
			id="password"
			name="password"
			placeholder={placeholder}
			variant="standard"
			onChange={onChange}
			value={value}
			error={error}
			helperText={helperText}
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
