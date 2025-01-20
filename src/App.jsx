import logo from './logo.svg';
import './style/main.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <Router>
        <NavBar />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
