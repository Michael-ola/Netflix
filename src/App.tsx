import React from 'react';
import LandingPage from './pages/LandingPage/LandingPage'
import SignInPage from './pages/SignInPage/SignInPage'
import SelectUserPage from './pages/SelectUserPage/SelectUserPage'
import MoviesPage from './pages/MoviesPage'

import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<LandingPage/>}/>    
        <Route path='/sign-in' element={<SignInPage/>} />
        <Route path='/select-user' element={<SelectUserPage/>} />
        <Route path='/browse' element={<MoviesPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
