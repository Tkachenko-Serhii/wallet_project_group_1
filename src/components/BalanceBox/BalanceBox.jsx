import s from './BalanceBox.module.css';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../redux/user';
// import { useEffect } from 'react';

export default function BalanceBox(props) {
  let uah = String.fromCodePoint(0x20b4);
  const balance = useSelector(userSelectors.getUserBalance)
    .toLocaleString()
    .replace(/,/i, '.');
  console.log(balance);
  // const result = value.toLocaleString().replace(/,/i, '.');
  return (
    <div className={s.balanceBox}>
      <p className={s.balanceLable}>ваш баланс</p>
      <p className={s.balanceValue}>
        {uah} {balance}
      </p>
    </div>
  );
}
