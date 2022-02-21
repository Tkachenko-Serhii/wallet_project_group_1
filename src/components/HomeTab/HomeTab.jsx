import BalanceBox from '../BalanceBox';
import Currency from '../Currency';
import Navigation from '../Navigation';
import NavBalanceWrapper from '../NavBalanceWrapper';
import NavBalanceCurrencyWrapper from '../NavBalanceCurrencyWrapper';
import { useMediaQuery } from '@mui/material';

export default function HomeTab() {
  const matches = useMediaQuery('(min-width:767px)');

  return (
    <NavBalanceCurrencyWrapper>
      <NavBalanceWrapper>
        <Navigation />
        <BalanceBox />
      </NavBalanceWrapper>
      {matches && <Currency />}
    </NavBalanceCurrencyWrapper>
  );
}
