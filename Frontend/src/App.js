import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Foodcourt from './components/Foodcourt'; // Import your other components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import router components

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foodcourt" element={<Foodcourt />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
