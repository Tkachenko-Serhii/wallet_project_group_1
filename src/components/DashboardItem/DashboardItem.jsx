import s from './DashboardItem.module.css';

export default function DashboardItem(props) {
  const { row } = props;

  return (
    <li className={s.transactionRowWrapper}>
      <ul className={s.transactionRow}>
        <li className={s.transactionCellDate}>
          {row.day}.{row.month}.{row.year.substring(2)}
        </li>
        <li className={s.transactionCellType}>{row.type ? '+' : '-'}</li>
        <li className={s.transactionCellCategory}>{row.category}</li>
        <li className={s.transactionCellComment}>{row.comment}</li>
        <li
          className={s.transactionCellSum}
          style={row.type ? { color: 'green' } : { color: 'red' }}
        >
          {row.sum}
        </li>
        <li className={s.transactionCellBalance}>{row.balance}</li>
      </ul>
    </li>
  );
}
