import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/Terms';
import Navbar from './components/NavBar/Navbar';
import NotFound from './pages/NotFound';
import Footer from './components/Footer/Footer';
import LoginPage from './pages/LoginPage';
import FoundersAccess from './pages/FoundersAccess';
import FoundersAccessRegister from './pages/FoundingMembersForm';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';




const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/founders-access" element={<FoundersAccess />} />
      <Route path="/founding-members-registration" element={<FoundersAccessRegister />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;