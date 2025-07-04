import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Apartments from '../pages/Apartments';
import ApartmentDetail from '../pages/ApartmentDetail';
import About from '../pages/About';
import Contact from '../pages/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apartments" element={<Apartments />} />
      <Route path="/apartments/:id" element={<ApartmentDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
