import s from './Dashboard.module.css';
import HomeIcon from '@mui/icons-material/Home';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import TransactionMobile from '../TransactionMobile/TransactionMobile';

export default function Dashboard() {
  const opetationType = true;

  return (
    <div className={s.container}>
      <div className={s.navigation}>
        <HomeIcon
          className={s.icon}
          sx={{
            padding: '5px',
            width: '44px',
            height: '44px',
            color: '#fff',
            backgroundColor: '#4A56E2',
          }}
        />
        <ShowChartIcon
          className={s.icon}
          sx={{
            padding: '5px',
            width: '44px',
            height: '44px',
            color: '#fff',
            backgroundColor: '#4A56E2',
          }}
        />
        <AttachMoneyIcon
          className={s.icon}
          sx={{
            padding: '5px',
            width: '44px',
            height: '44px',
            color: '#fff',
            backgroundColor: '#4A56E2',
          }}
        />
      </div>

      <div className={s.balanceBox}>
        <p className={s.balanceLable}>ваш баланс</p>
        <p className={s.balanceSum}>2400000</p>
      </div>
      <TransactionMobile />
    </div>
  );
}
