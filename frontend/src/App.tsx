import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import SavedTripPage from "./pages/SavedTripPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard/:userId" element={<DashboardPage />} />
          <Route path="/dashboard/:userId/trip/:tripId" element={<SavedTripPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App