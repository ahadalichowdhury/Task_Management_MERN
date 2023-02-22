import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage";
import CanceledPage from "./pages/CanceledPage";
import CreatePage from "./pages/CreatePage";
import NewPage from "./pages/NewPage";
import ProfilePage from "./pages/ProfilePage";
import ProgressPage from "./pages/ProgressPage";
import CompletedPage from "./pages/CompletedPage";
import FullScreenLoader from "./Components/MasterLayout/FullScreenLoader";
import ForgetPassword from "./pages/ForgetPassword";
import { getToken } from "./Helper/sessionHelper";
import SendOTP from "./accountRecover/SendOTP";
import VerifyOTP from "./accountRecover/VerifyOTP";
import CreatePassword from "./accountRecover/CreatePassword";

function App() {
  if (getToken()) {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<DashboardPage />} />

            <Route exact path="/Create" element={<CreatePage />} />

            <Route exact path="/All" element={<NewPage />} />

            <Route exact path="/Progress" element={<ProgressPage />} />
            <Route exact path="/Completed" element={<CompletedPage />} />
            <Route exact path="/Canceled" element={<CanceledPage />} />
            <Route exact path="/Profile" element={<ProfilePage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <FullScreenLoader />
        </BrowserRouter>
      </>
    );
  } else {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Navigate to="/login" replace />} />
            <Route exact path="/Login" element={<LoginPage />} />
            <Route exact path="/Registration" element={<RegistrationPage />} />
            <Route exact path="/ForgetPassword" element={<ForgetPassword />} />
            <Route exact path="/sendOTP" element={<SendOTP />} />
            <Route exact path="/VerifyOTP" element={<VerifyOTP />} />
            <Route exact path="/CreatePassword" element={<CreatePassword />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <FullScreenLoader />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
