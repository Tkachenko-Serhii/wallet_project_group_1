const getTransactions = (state) => state.transactions.all;
const getBalance = (state) => state.transactions.getBalance;

const transactionSelectors = {
  getTransactions,
  getBalance,
};

export default transactionSelectors;
