import BalanceBox from '../BalanceBox';
import Navigation from '../Navigation';
import NavBalanceWrapper from '../NavBalanceWrapper';
import NavBalanceCurrencyWrapper from '../NavBalanceCurrencyWrapper';
import Dashboard from '../Dashboard';

export default function HomeTab() {
  return (
    <NavBalanceCurrencyWrapper>
      <NavBalanceWrapper>
        <Navigation />
        <BalanceBox />
      </NavBalanceWrapper>
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
    </NavBalanceCurrencyWrapper>
  );
}
