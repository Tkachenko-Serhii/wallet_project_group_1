// how to use in app js
// 	<Route
// 	path="path"
// 	element={
// 		<PublicRoute restricted redirectTo="path">
// 			<PageComponent />
// 		</PublicRoute>
// 	}
// />;

import { Navigate } from 'react-router-dom';

export default function PublicRoute({
	children,
	restricted = false,
	redirectTo = '/'
}) {
	const isLoggedIn = false; //please change this var for redux value of isLoggedIn
	const shouldRedirect = isLoggedIn && restricted;
	return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}
