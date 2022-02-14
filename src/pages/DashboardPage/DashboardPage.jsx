import { Routes, Route } from 'react-router-dom';

import Media from 'react-media';
// import s from './HomeTab.module.css';

import SplitLineDesktop from '../../components/SplitLineDesktop';
import HomeTabWrapper from '../../components/HomeTabWrapper';
import Dashboard from '../../components/Dashboard';
import Container from '../../components/Container';
import HomeTab from '../../components/HomeTab';
import TransactionMobile from '../../components/TransactionMobile';
import BalanceBox from '../../components/BalanceBox';
import Navigation from '../../components/Navigation';
import NavBalanceWrapper from '../../components/NavBalanceWrapper';
// import NavBalanceCurrencyWrapper from '../../components/NavBalanceCurrencyWrapper';

export default function DashboardPage() {
  return (
    <div>
      <Media
        queries={{
          mobile: '(max-width: 767px)',
          other: '(min-width: 768px)',
        }}
      >
        {(matches) => (
          <>
            {matches.mobile && (
              <HomeTabWrapper>
                <Container>
                  <NavBalanceWrapper>
                    <Navigation />
                    <BalanceBox />
                  </NavBalanceWrapper>
                  <TransactionMobile />
                  {/* TransactionMobile компонент добавлен для проверки. */}
                  {/* <Routes>
                    <Route path="/" element={<TransactionMobile />} />
                    <Route path="/chart" element={<TransactionMobile />} />
                    <Route path="/currency" element={<TransactionMobile />} />
                  </Routes> */}
                </Container>
              </HomeTabWrapper>
            )}
            {matches.other && (
              <>
                {/* <HomeTab /> */}
                <Container>
                  <HomeTabWrapper>
                    <HomeTab />
                    <SplitLineDesktop />
                    <Dashboard />{' '}
                  </HomeTabWrapper>
                  <Routes>
                    {/* <Route path="/home/dash" element={<Dashboard />} /> */}
                    {/* <Route path="/chart" element={<Chart />} /> */}
                  </Routes>
                </Container>
              </>
            )}
          </>
        )}
      </Media>
    </div>
  );
}
