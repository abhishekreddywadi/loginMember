import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AgeSelection from './components/AgeSelection';
import RegistrationForm from './components/RegistrationForm';
import AdultRegistrationForm from './components/AdultRegistrationForm';
import PaymentForm from './components/PaymentForm';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import AuthProvider from './components/AuthProvider';
import './App.css'

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />
          <Route path="/register/below16" element={<RegistrationForm />} />
          <Route path="/register/above16" element={<AdultRegistrationForm />} />
          
          {/* Protected Routes */}
          <Route path="/" element={
            <PrivateRoute>
              <AgeSelection />
            </PrivateRoute>
          } />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="/payment" element={
            <PrivateRoute>
              <PaymentForm />
            </PrivateRoute>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
