import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from './components/pages/LoginPage'
import PageNotFoundPage from './components/pages/PageNotFoundPage'
import PublicPage from './components/pages/PublicPage'
import HomePage from './components/pages/HomePage'
import HowToUse from "./components/pages/HowToUse";
import AboutUsPage from "./components/pages/AboutUsPage";
import AuthenticationFirewall from "./components/pages/AuthenticationFirewall";
import Dashboard from "./components/pages/Dashboard";
import ProfilePage from "./components/pages/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicPage />}>
          <Route index element={<HomePage />}></Route>
          <Route path="docs" element={<HowToUse />}></Route>
          <Route path="aboutUs" element={<AboutUsPage />}></Route>
        </Route>
        <Route element={<AuthenticationFirewall />}>
          <Route path="dashboard"  element={<Dashboard />}>
            <Route index element={<ProfilePage />}></Route>
            <Route path="docs" element={<HowToUse />}></Route>
            <Route path="aboutUs" element={<AboutUsPage />}></Route>
          </Route>
        </Route>
        <Route path="login" element={<LoginPage />}></Route>
        {/* <Route path="signup" element={<SignupPage />}></Route> */}
        <Route path="/404" element={<PageNotFoundPage />}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </>
  );
}

export default App;
