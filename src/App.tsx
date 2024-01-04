import React, { useState, useEffect } from "react";
import LandingPage from "pages/LandingPage";
import SignInPage from "pages/SignInPage/SignInPage";
import SignUpPage from "pages/SignUpPage";
import SelectUserPage from "pages/SelectUserPage/SelectUserPage";
import MoviesPage from "pages/MoviesPage";
import Step1Page from "features/signUp/pages/step1page";
import Step2Page from "features/signUp/pages/Step2Page";
import Step3Page from "features/signUp/pages/Step3Page";
import PlanPage from "features/signUp/pages/PlanPage";
import PaymentPicker from "features/signUp/pages/PaymentPicker";
import PaymentPage from "features/signUp/pages/PaymentPage";
import SignOutPage from "pages/SignOutPage";
import { stateType } from "lib/redux-store/types";

import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { authVerify } from "lib/redux-store/Actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";

const protectedSignUpRoutes = (
  <Route element={<Outlet />}>
    <Route path="step3" element={<Step3Page />} />
    <Route path="planform" element={<PlanPage />} />
    <Route path="paymentPicker" element={<PaymentPicker />} />
    <Route path="creditoption" element={<PaymentPage />} />
  </Route>
);

const protectedUserRoutes = (
  <Route element={<Outlet />}>
    <Route path="/select-user" element={<SelectUserPage />} />
    <Route path="/browse" element={<MoviesPage />} />
    <Route path="/sign-out" element={<SignOutPage />} />
  </Route>
);

function App() {
  const [authState, setAuthState] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: stateType) => {
    return state.auth.token;
  });

  useEffect(() => {
    isAuthenticated && setAuthState(true);
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(authVerify() as unknown as AnyAction);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />}>
          <Route index element={<Step1Page />} />
          <Route path="step2" element={<Step2Page />} />
          {authState && protectedSignUpRoutes}
        </Route>
        {authState && protectedUserRoutes}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
