import BalanceBox from '../BalanceBox';
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
      {matches && (
        <div
          name="currency block here"
          style={{
            width: '334px',
            height: '174px',
            backgroundColor: '#000',
            color: '#fff',
          }}
        >
          currency
        </div>
      )}
    </NavBalanceCurrencyWrapper>
  );
}
