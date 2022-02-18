import s from './Dashboard.module.css';
import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transactions';

import DashboardItem from '../DashboardItem';

export default function Dashboard(props) {
  const allTransactions = useSelector(transactionsSelectors.getTransactions);
  console.log(allTransactions);
  return (
    <div className={s.wrapper}>
      <ul className={s.table}>
        <li>
          <ul className={s.tableHeader}>
            <li className={s.tableHeaderItemDate}>Date</li>
            <li className={s.tableHeaderItemType}>Type</li>
            <li className={s.tableHeaderItemCategory}>Category</li>
            <li className={s.tableHeaderItemComment}>Comment</li>
            <li className={s.tableHeaderItemAmount}>Amount</li>
            <li className={s.tableHeaderItemBalance}>Balance</li>
          </ul>
        </li>

        <li className={s.tableitems}>
          <ul className={s.transactionsList}>
            {allTransactions.map((row) => {
              return <DashboardItem key={row._id} row={row} />;
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
}
