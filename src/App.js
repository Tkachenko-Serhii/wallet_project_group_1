import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import Dashboard from './components/Dashboard';
import Currency from './components/Currency';
import TransactionMobile from './components/TransactionMobile';
import Modal from './components/Modal';
import Form from './components/FormAddTransaction';

import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import { userOperations } from './redux/user';
import { useMediaQuery } from '@mui/material';

function App() {
  const dispatch = useDispatch();
  const matches = useMediaQuery('(min-width:768px)');
  const showModal = useSelector((state) => state.modal.modal);
  useEffect(() => dispatch(userOperations.fetchCurrentUser()), [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute restricted redirectTo="/home">
              <Navigate to="/login" />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute restricted redirectTo="/home">
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute restricted redirectTo="/home">
              <RegisterPage />
            </PublicRoute>
          }
        />
        {!matches && (
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          >
            <Route
              index
              element={
                <PrivateRoute>
                  <TransactionMobile />
                </PrivateRoute>
              }
            />

            <Route
              path="chart"
              element={
                <PrivateRoute>
                  <TransactionMobile />
                </PrivateRoute>
              }
            />
            <Route
              path="currency"
              element={
                <PrivateRoute>
                  <Currency />
                </PrivateRoute>
              }
            />
          </Route>
        )}
        {matches && (
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          >
            <Route
              index
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="chart"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/home" />} />
          </Route>
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
    // {
    //     showModal && (
    //       <Modal>
    //         <Form />
    //       </Modal>
    //     )
    //   }
  );
}

export default App;
