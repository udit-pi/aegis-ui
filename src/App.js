import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import pages/components
import Incidents from './pages/Incidents/Incidents';
import NewIncidentForm from './pages/Incidents/NewIncidentForm';
// Uncomment and import other components as needed
// import SignIn from './pages/Auth/sign-in';
// import ForgotPassword from './pages/Auth/forgot-password';
// import ResetPassword from './pages/Auth/reset-password';
// import LoginOtp from './pages/Auth/login-otp';
// import LoginVerifyOtp from './pages/Auth/login-otp-verify';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes here */}
        <Route path="/hse/incidents" element={<Incidents />} />
        <Route path="/hse/incident/add" element={<NewIncidentForm />} />

        {/* Uncomment and use other routes when ready */}
        {/* <Route path="/login" element={<SignIn />} /> */}
        {/* <Route path="/forget-password" element={<ForgotPassword />} /> */}
        {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
        {/* <Route path="/login-otp" element={<LoginOtp />} /> */}
        {/* <Route path="/login/verify-otp/:id" element={<LoginVerifyOtp />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
