import s from './DashboardItem.module.css';

export default function DashboardItem({ row }) {
  const splitedDate = row.date.split('.');
  const cuted = splitedDate[2].substr(-2);
  const formatedDate = splitedDate[0] + '.' + splitedDate[1] + '.' + cuted;
  const formatedSum = row.sum / 100;
  const formatedBalance = row.balance / 100;
  return (
    <li className={s.transactionRowWrapper}>
      <ul className={s.transactionRow}>
        <li className={s.transactionCellDate}>{formatedDate}</li>
        <li className={s.transactionCellType}>{row.type ? '+' : '-'}</li>
        <li className={s.transactionCellCategory}>{row.category}</li>
        <li className={s.transactionCellComment}>{row.comment}</li>
        <li
          className={s.transactionCellSum}
          style={row.type ? { color: 'green' } : { color: 'red' }}
        >
          {formatedSum.toLocaleString().replace(/,/i, '.')}
        </li>
        <li className={s.transactionCellBalance}>
          {formatedBalance.toLocaleString().replace(/,/i, '.')}
        </li>
      </ul>
    </li>
  );
}
