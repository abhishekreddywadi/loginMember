import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgeSelection from './components/AgeSelection';
import RegistrationForm from './components/RegistrationForm';
import AdultRegistrationForm from './components/AdultRegistrationForm';
import PaymentForm from './components/PaymentForm';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AgeSelection />} />
        <Route path="/register/below16" element={<RegistrationForm />} />
        <Route path="/register/above16" element={<AdultRegistrationForm />} />
        <Route path="/payment" element={<PaymentForm />} />
      </Routes>
    </Router>
  )
}

export default App
