import s from './DashboardItem.module.css';

export default function DashboardItem({ row }) {
  return (
    <li className={s.transactionRowWrapper}>
      <ul className={s.transactionRow}>
        <li className={s.transactionCellDate}>
          {row.day}.
          {row.month.toString().length === 1
            ? '0' + row.month.toString()
            : row.month}
          .{row.year.toString().substring(2)}
        </li>
        <li className={s.transactionCellType}>{row.type ? '+' : '-'}</li>
        <li className={s.transactionCellCategory}>{row.category}</li>
        <li className={s.transactionCellComment}>{row.comment}</li>
        <li
          className={s.transactionCellSum}
          style={row.type ? { color: 'green' } : { color: 'red' }}
        >
          {row.sum.toLocaleString().replace(/,/i, '.')}
        </li>
        <li className={s.transactionCellBalance}>
          {row.balance.toLocaleString().replace(/,/i, '.')}
        </li>
      </ul>
    </li>
  );
}
