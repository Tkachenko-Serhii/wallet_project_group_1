import s from './TransactionMobile.module.css';

export default function TransactionMobile() {
  const opetationType = true;

  return (
    <ul
      className={s.transactionDetailsMobile}
      style={{
        borderLeft: opetationType ? '5px solid #FF6596' : '5px solid #24CCA7',
      }}
    >
      <li className={s.transactionDetailsRowMobile}>
        <p className={s.transactionDetailsRowLabelMobile}>Дата</p>
        <p className={s.transactionDetailsRowValueMobile}>13.13.22</p>
      </li>
      <li className={s.transactionDetailsRowMobile}>
        <p className={s.transactionDetailsRowLabelMobile}>Тип</p>
        <p className={s.transactionDetailsRowValueMobile}>13.13.22</p>
      </li>
      <li className={s.transactionDetailsRowMobile}>
        <p className={s.transactionDetailsRowLabelMobile}>Категория</p>
        <p className={s.transactionDetailsRowValueMobile}>13.13.22</p>
      </li>
      <li className={s.transactionDetailsRowMobile}>
        <p className={s.transactionDetailsRowLabelMobile}>Комментарий</p>
        <p className={s.transactionDetailsRowValueMobile}>13.13.22</p>
      </li>
      <li className={s.transactionDetailsRowMobile}>
        <p className={s.transactionDetailsRowLabelMobile}>Сумма</p>
        <p className={s.transactionDetailsRowValueMobile}>194.13.22</p>
      </li>
      <li className={s.transactionDetailsRowMobile}>
        <p className={s.transactionDetailsRowLabelMobile}>Баланс</p>
        <p className={s.transactionDetailsRowValueMobile}>sdfsddffffffff</p>
      </li>
    </ul>
  );
}
