import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import { Routes, Route, Navigate } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
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
            <Route path="/home/*" element={<DashboardPage />} />
        {/* пока установил path='/home' . должно редиректить при успешной авторизации на защищенный path='/' */}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</div>
	);
}

export default App;
