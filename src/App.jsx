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
import ContactPage from './pages/ContactPage';
import BlogHomePage from './pages/BlogHomePage';
import BlogPost from './pages/BlogPost';
import HelpPage from './pages/HelpPage';
import ApiOverviewPage from './pages/ApiOverviewPage';
import ApexAccess from './pages/ApexAccess';
import FullThrottleAccess from './pages/FullThrottleAccessPage';
import ApexAccessRegister from './pages/ApexMembersForm';
import FullThrottleAccessRegister from './pages/FullThrottleMembersForm';
import GeneralSignUp from './pages/SignUpPage';




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
      <Route path="/apex-access" element={<ApexAccess /> } />
      <Route path="/apex-members-registration" element={<ApexAccessRegister />} />
      <Route path="/full-throttle-access" element={<FullThrottleAccess />} />
      <Route path="/full-throttle-members-registration" element={<FullThrottleAccessRegister />} />
      <Route path="/register" element={<GeneralSignUp />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/api" element={<ApiOverviewPage />} />
      <Route path="/blog" element={<BlogHomePage />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;