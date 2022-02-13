import s from './TransactionMobile.module.css';

export default function TransactionMobile(props) {
  const operations = [
    {
      id: 1,
      date: '13.12.12',
      type: false,
      category: 'qwert',
      comment: 'asfg',
      value: 214567,
      balance: 56789876,
    },
    {
      id: 2,
      date: '12.12.12',
      type: true,
      category: 'qwert',
      comment: 'asfg',
      value: 214567,
      balance: 56789876,
    },
    {
      id: 3,
      date: '15.12.12',
      type: true,
      category: 'qwert',
      comment: 'asfg',
      value: 214567,
      balance: 56789876,
    },
    {
      id: 4,
      date: '16.12.12',
      type: false,
      category: 'qwert',
      comment: 'asfg',
      value: 214567,
      balance: 56789876,
    },
  ];

  return operations.map((operation) => {
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
          <p className={s.transactionDetailsRowValueMobile}>{operation.date}</p>
        </li>

        <li className={s.transactionDetailsRowMobile}>
          <p className={s.transactionDetailsRowLabelMobile}>Тип</p>
          <p className={s.transactionDetailsRowValueMobile}>
            {operation.type ? '+' : '-'}
          </p>
        </li>

        <li className={s.transactionDetailsRowMobile}>
          <p className={s.transactionDetailsRowLabelMobile}>Категория</p>
          <p className={s.transactionDetailsRowValueMobile}>
            {operation.category}
          </p>
        </li>
        <li className={s.transactionDetailsRowMobile}>
          <p className={s.transactionDetailsRowLabelMobile}>Комментарий</p>
          <p className={s.transactionDetailsRowValueMobile}>
            {operation.comment}
          </p>
        </li>
        <li className={s.transactionDetailsRowMobile}>
          <p className={s.transactionDetailsRowLabelMobile}>Сумма</p>
          <p className={s.transactionDetailsRowValueMobile}>
            {operation.value}
          </p>
        </li>
        <li className={s.transactionDetailsRowMobile}>
          <p className={s.transactionDetailsRowLabelMobile}>Баланс</p>
          <p className={s.transactionDetailsRowValueMobile}>
            {operation.balance}
          </p>
        </li>
      </ul>
    );
  });
}
