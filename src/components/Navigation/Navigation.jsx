import HomeIcon from '@mui/icons-material/Home';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navigation() {
  const { t, i18n } = useTranslation();
  return (
    <ul className={s.navigation}>
      <li className={s.iconWrapper}>
        <NavLink
          end
          to="/home"
          className={({ isActive }) =>
            isActive ? s.iconNavLinkActive : s.iconNavLink
          }
        >
          <HomeIcon className={s.icon} />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)}
          end
          to="/home"
        >
          {t("main")}
        </NavLink>
      </li>
      <li className={s.iconWrapper}>
        <NavLink
          to="chart"
          className={({ isActive }) =>
            isActive ? s.iconNavLinkActive : s.iconNavLink
          }
        >
          <ShowChartIcon className={s.icon} />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)}
          to="chart"
        >
          {t("statistics")}
        </NavLink>
      </li>
      <li className={s.iconWrapper}>
        <NavLink
          to="currency"
          className={({ isActive }) =>
            isActive ? s.iconNavLinkActive : s.iconNavLink
          }
        >
          <AttachMoneyIcon className={s.icon} />
        </NavLink>
      </li>
    </ul>
  );
}
