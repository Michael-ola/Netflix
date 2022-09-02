import React from 'react';
import LandingPage from './pages/LandingPage/LandingPage'
import SignInPage from './pages/SignInPage/SignInPage'
import SignUpPage from './pages/SignUpPage'
import SelectUserPage from './pages/SelectUserPage/SelectUserPage'
import MoviesPage from './pages/MoviesPage'
import Step1Page from './pages/SignUpPage/step1page'
import Step2Page from './pages/SignUpPage/Step2Page'
import Step3Page from './pages/SignUpPage/Step3Page'
import PlanPage from './pages/SignUpPage/PlanPage'
import PaymentPicker from './pages/SignUpPage/PaymentPicker'
import PaymentPage from './pages/SignUpPage/PaymentPage'

import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<LandingPage/>}/>    
        <Route path='/sign-up' element={<SignUpPage/>}>
          <Route index element={<Step1Page/>} />
          <Route path='step2' element={<Step2Page/>} />
          <Route path='step3' element={<Step3Page/>} />
          <Route path='planform' element={<PlanPage/>} />
          <Route path='paymentPicker' element={<PaymentPicker/>}/>
          <Route path='creditoption' element={<PaymentPage/>}/>
          <Route path='*' element={<div>ERROR! Page not found</div>} />
        </Route>
        <Route path='/sign-in' element={<SignInPage/>} />
        <Route path='/select-user' element={<SelectUserPage/>} />
        <Route path='/browse' element={<MoviesPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
