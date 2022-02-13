import s from './BalanceBox.module.css';

export default function BalanceBox(props) {
  const value = 2400000;
  let uah = String.fromCodePoint(0x20b4);

  return (
    <div className={s.balanceBox}>
      <p className={s.balanceLable}>ваш баланс</p>
      <p className={s.balanceValue}>
        {uah} {value}
      </p>
    </div>
  );
}
