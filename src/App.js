import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import Dashboard from './components/Dashboard';
import TransactionMobile from './components/TransactionMobile';
import { Routes, Route, Navigate } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { useMediaQuery } from '@mui/material';

function App() {
  const matches = useMediaQuery('(min-width:768px)');
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={
            <PublicRoute restricted path="/home">
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute restricted path="/home">
              <RegisterPage />
            </PublicRoute>
          }
        />
        {!matches && (
          <Route path="/home" element={<DashboardPage />}>
            <Route path="/home/" element={<TransactionMobile />} />
            <Route path="/home/chart" element={<TransactionMobile />} />
            <Route path="/home/currency" element={<TransactionMobile />} />
          </Route>
        )}
        {matches && (
          <Route path="/home" element={<DashboardPage />}>
            <Route path="/home/" element={<Dashboard />} />
            <Route path="/home/chart" element={<Dashboard />} />
          </Route>
        )}

        {/* пока установил path='/home' . должно редиректить при успешной авторизации на защищенный path='/' */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
