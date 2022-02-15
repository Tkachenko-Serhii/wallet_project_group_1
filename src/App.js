import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import PublicRoute from './components/PublicRoute';
// import PrivateRoute from './components/PrivateRoute';
import { userOperations } from './redux/user';

function App() {
	const dispatch = useDispatch();

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
				<Route path="/home/*" element={<DashboardPage />} />
				{/* пока установил path='/home' . должно редиректить при успешной авторизации на защищенный path='/' */}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</div>
	);
}

export default App;
