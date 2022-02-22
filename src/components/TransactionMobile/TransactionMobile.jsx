import s from './TransactionMobile.module.css';
import TransactionMobileItem from '../TransactionMobileItem/TransactionMobileItem';
import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transactions';

export default function TransactionMobile(props) {
  const allTransactions = useSelector(transactionsSelectors.getTransactions);

  return allTransactions.length < 1 ? (
    <p className={s.empty}>'No Transactions'</p>
  ) : (
    allTransactions.map((operation) => {
      return <TransactionMobileItem key={operation._id} data={operation} />;
    })
  );
}
