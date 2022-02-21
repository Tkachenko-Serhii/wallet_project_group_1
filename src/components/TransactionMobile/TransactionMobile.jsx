import s from './TransactionMobile.module.css';
import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transactions';

export default function TransactionMobile(props) {
  const allTransactions = useSelector(transactionsSelectors.getTransactions);

  return allTransactions.map((operation) => {
    const splitedDate = operation.date.split('.');
    const cuted = splitedDate[2].substr(-2);
    const formatedDate = splitedDate[0] + '.' + splitedDate[1] + '.' + cuted;
    return (
      <ul
        key={operation.id}
        className={s.transactionDetailsMobile}
        style={{
          borderLeft: operation.type
            ? '5px solid #24CCA7'
            : '5px solid #FF6596',
        }}
      >
        <li className={s.transactionDetailsRowMobile}>
          <p className={s.transactionDetailsRowLabelMobile}>Date</p>
          <p className={s.transactionDetailsRowValueMobile}>{formatedDate}</p>
        </li>

        <li className={s.transactionDetailsRowMobile}>
          <p className={s.transactionDetailsRowLabelMobile}>Type</p>
          <p className={s.transactionDetailsRowValueMobile}>
            {operation.type ? '+' : '-'}
          </p>
        </li>

        <li className={s.transactionDetailsRowMobile}>
          <p className={s.transactionDetailsRowLabelMobile}>Category</p>
          <p className={s.transactionDetailsRowValueMobile}>
            {operation.category}
          </p>
        </li>
        <li className={s.transactionDetailsRowMobile}>
          <p className={s.transactionDetailsRowLabelMobile}>Comment</p>
          <p className={s.transactionDetailsRowValueMobile}>
            {operation.comment}
          </p>
        </li>
        <li className={s.transactionDetailsRowMobile}>
          <p className={s.transactionDetailsRowLabelMobile}>Amount</p>
          <p className={s.transactionDetailsRowValueMobile}>{operation.sum}</p>
        </li>
        <li className={s.transactionDetailsRowMobile}>
          <p className={s.transactionDetailsRowLabelMobile}>Balance</p>
          <p className={s.transactionDetailsRowValueMobile}>
            {operation.balance}
          </p>
        </li>
      </ul>
    );
  });
}
