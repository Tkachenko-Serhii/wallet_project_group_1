import s from './BalanceBox.module.css';

export default function BalanceBox() {
  return (
    <div className={s.balanceBox}>
      <p className={s.balanceLable}>ваш баланс</p>
      <p className={s.balanceSum}>2400000</p>
    </div>
  );
}
