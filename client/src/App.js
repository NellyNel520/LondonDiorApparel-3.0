import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
     <div>
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </main>
      {/* footer */}

     </div>
    
  );
}

export default App;
