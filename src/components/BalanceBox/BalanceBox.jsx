import s from './BalanceBox.module.css';

export default function BalanceBox(props) {
  let uah = String.fromCodePoint(0x20b4);
  const value = 123456789.55;

  const result = value.toLocaleString().replace(/,/i, '.');
  return (
    <div className={s.balanceBox}>
      <p className={s.balanceLable}>ваш баланс</p>
      <p className={s.balanceValue}>
        {uah} {result}
      </p>
    </div>
  );
}
