import { Routes, Route } from 'react-router-dom';
// import { Fragment } from 'react';
import Media from 'react-media';
import s from './HomeTab.module.css';

import Dashboard from '../Dashboard/Dashboard';
import TransactionMobile from '../TransactionMobile/TransactionMobile';
import BalanceBox from '../BalanceBox/BalanceBox';
import Navigation from '../Navigation/Navigation';
import NavBalanceWrapper from '../NavBalanceWrapper/NavBalanceWrapper';
import NavBalanceCurrencyWrapper from '../NavBalanceCurrencyWrapper/NavBalanceCurrencyWrapper';
import { Fragment } from 'react';

export default function HomeTab() {
  // const opetationType = true;

  return (
    <div className={s.container}>
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px)',
        }}
      >
        {(matches) => (
          <>
            {matches.small && (
              <>
                <NavBalanceWrapper>
                  <Navigation />
                  <BalanceBox />
                </NavBalanceWrapper>

                <Routes>
                  <Route path="/" element={<TransactionMobile />} />
                  <Route path="/chart" element={<TransactionMobile />} />
                  <Route path="/currency" element={<TransactionMobile />} />
                </Routes>
              </>
            )}
            {matches.medium && (
              <>
                <NavBalanceCurrencyWrapper>
                  <NavBalanceWrapper>
                    <Navigation />
                    <BalanceBox />
                  </NavBalanceWrapper>
                  <div
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

                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/1" element={<Dashboard />} />
                </Routes>
              </>
            )}
          </>
        )}
      </Media>
    </div>
  );
}
