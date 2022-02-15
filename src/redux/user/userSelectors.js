const getUserName = (state) => state.session.user.name;

const getUserEmail = (state) => state.session.user.email;

const getUserServerError = (state) => state.session.serverError;

const getLoginStatus = (state) => state.session.isLoggedIn;

const userSelectors = {
	getUserName,
	getUserEmail,
	getUserServerError,
	getLoginStatus
};

export default userSelectors;
