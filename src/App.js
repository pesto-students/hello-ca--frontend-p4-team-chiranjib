import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Services from './pages/Services';
import OurProcess from './pages/OurProcess';
import GetStarted from './pages/GetStarted';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import UserDashboard from './pages/UserDashboard';
import CaDashboard from './pages/CaDashboard';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-process" element={<OurProcess />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/ca-dashboard" element={<CaDashboard />} />
      </Routes>
    </Router>
  );
}

export default App