import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Loader from "./components/Loader/Loader";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import Dashboard from "./components/Dashboard";
import Currency from "./components/Currency";
import TransactionMobile from "./components/TransactionMobile";
import Modal from "./components/Modal";
import Form from "./components/FormAddTransaction";

import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import { userOperations } from "./redux/user";
import { useMediaQuery } from "@mui/material";

const RegisterPage = lazy(() => import("./pages/RegisterPage"));

function App() {
  const dispatch = useDispatch();
  const matches = useMediaQuery("(min-width:768px)");
  const showModal = useSelector((state) => state.modal.modal);
  useEffect(() => dispatch(userOperations.fetchCurrentUser()), [dispatch]);

  return (
    <>
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
                <Suspense fallback={<Loader />}>
                  <RegisterPage />
                </Suspense>
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
                    <Dashboard chart />
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
                    <Dashboard chart />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/home" />} />
            </Route>
          )}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      {showModal && (
        <Modal>
          <Form />
        </Modal>
      )}
    </>
  );
}

export default App;
