import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</div>
	);
}

export default App;
