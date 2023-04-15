import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
     <div>
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </main>
      <Footer />

     </div>
    
  );
}

export default App;
