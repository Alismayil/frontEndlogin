
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './page/home';
import LogInPage from './page/login';
import RegisterPage from './page/register';
import ErrorPage from './page/error';
import Navbar from './navbar';
import Profile from './page/profile';
import TokenProvider from './conext';
import PrivateRoute from './routers/privateRoute';

function App() {

  return (
    <>
    <TokenRegisterProvider>
      <TokenProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route element={<PrivateRoute />} >
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </TokenProvider>
      </TokenRegisterProvider>

    </>
  )
}

export default App
