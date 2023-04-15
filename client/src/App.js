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
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<Products />} /> */}
         {/* <Route path="/" element={<ProductDetails />} /> */}
         {/* <Route path="/" element={<Register />} /> */}
         {/* <Route path="/" element={<Login />} /> */}
         {/* <Route path="/" element={<Cart />} /> */}
         <Route path="/" element={<About />} />
      </Routes>
      </main>
      <Newsletter />
      <Footer />

     </div>
    
  );
}

export default App;
