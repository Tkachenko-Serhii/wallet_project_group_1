const getUserName = (state) => state.session.user.name;

const getUserEmail = (state) => state.session.user.email;

const getUserBalance = (state) => state.session.user.balance;

const getUserServerError = (state) => state.session.serverError;

const getLoginStatus = (state) => state.session.isLoggedIn;

const userSelectors = {
  getUserName,
  getUserEmail,
  getUserBalance,
  getUserServerError,
  getLoginStatus
};

export default userSelectors;
