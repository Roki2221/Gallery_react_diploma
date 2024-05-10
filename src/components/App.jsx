import Header from './Header/Header';
import About from '../pages/About';
import Exhibitions from '../pages/Exhibitions';
import Gallery from '../pages/Gallery';
import Blog from '../pages/Blog';
import Contacts from '../pages/Contacts';
import Events from '../pages/Events';
import Home from '../pages/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './Footer/Footer';
import BreadCrumb from './BreadCrumb/BreadCrumb';

export const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
      <Header isHomePage={isHomePage}></Header>
      <BreadCrumb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Exhibitions" element={<Exhibitions />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};
