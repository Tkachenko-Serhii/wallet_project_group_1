import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomeTab from './components/HomeTab/HomeTab';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* <Route path='/' element={<HomeTab />} /> */}{' '}
        {/* пока закоментил. должно редиректить при успешной авторизации на path='/' */}
      </Routes>
    </div>
  );
}

export default App;
