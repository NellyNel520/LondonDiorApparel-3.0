import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Announcement from './components/Announcement';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Newsletter from './components/Newsletter';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import About from './pages/About';


function App() {
  return (
     <div>
      <Navbar />
      <Announcement />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
         <Route path="/product/:id" element={<ProductDetails />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/about" element={<About />} />
      </Routes>
      </main>
      <Newsletter />
      <Footer />

     </div>
    
  );
}

export default App;
