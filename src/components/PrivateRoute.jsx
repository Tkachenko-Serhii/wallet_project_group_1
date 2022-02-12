// how to use in app js
//  <Route
// 		path="path"
// 		element={
// 			<PrivatRoute redirectTo="path">//
// 					<Pagecomponent />//
// 			</PrivatRoute>
// 		}
//  />;
import { Navigate } from 'react-router-dom';
export default function PrivateRoute({ children, redirectTo = '/' }) {
	const isLoggedIn = true; // please change this var for redux value of isLogin
	return isLoggedIn ? children : <Navigate to={redirectTo} />;
}
