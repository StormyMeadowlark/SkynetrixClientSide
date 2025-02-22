import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/Terms';
import Navbar from './components/NavBar/Navbar';
import NotFound from './pages/NotFound';


const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;