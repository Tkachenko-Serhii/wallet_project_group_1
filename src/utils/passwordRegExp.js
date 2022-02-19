const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;

export default passwordRegExp;

// password should have min 6 max 12 chars, at least one uppercase letter, one lowercase letter, one number and one special character
