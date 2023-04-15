import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Announcement from './components/Announcement';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
     <div>
      <Navbar />
      <Announcement />
      <main>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<Products />} /> */}
         <Route path="/" element={<ProductDetails />} />
      </Routes>
      </main>
      <Footer />

     </div>
    
  );
}

export default App;
