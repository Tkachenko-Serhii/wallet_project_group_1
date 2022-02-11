const passwordRegExp =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;

export default passwordRegExp;

// password should have min 8 max 12 chars, at least one uppercase letter, one lowercase letter, one number and one special character
