import { useSelector } from 'react-redux';
import s from './BalanceBox.module.css';
import { useTranslation } from 'react-i18next';
import { userSelectors } from '../../redux/user';

export default function BalanceBox(props) {
  const { t, i18n } = useTranslation();
  let uah = String.fromCodePoint(0x20b4);
  const stateBalance = useSelector(userSelectors.getUserBalance) / 100;
  const balance = stateBalance.toFixed(2).toLocaleString().replace(/,/i, '.');

  return (
    <div className={s.balanceBox}>
      <p className={s.balanceLable}>{t("balance")}</p>
      <p className={s.balanceValue}>
        <span className={s.uah}>{uah}</span> {balance}
      </p>
    </div>
  );
}
