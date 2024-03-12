// import './App.css';
import './assets/style.scss';
import Navbar from './components/Navbar.tsx';
import Contact_Us from './components/Contact_Us.tsx';
import ContactUsResponse from './components/ContactUsResponse.tsx';
import Footer from './components/Footer.tsx';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Contact_Us />} />
        <Route path="/contact-responses" element={<ContactUsResponse />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
