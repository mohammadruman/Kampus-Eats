import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from '../src/pages/Login'
import Register from '../src/pages/Register'
import Foodcourt from './components/Foodcourt'; // Import your other components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import router components
import MenuPage from './pages/MenuPage';
import RestaurantMenu from './components/RestaurantMenu';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="/login" element={<Login/>}/>
          <Route  path="/register" element={<Register/>}/>
          <Route path="/foodcourt" element={<Foodcourt />} />
          <Route path="/foodcourt/menu" element={<MenuPage />} />
          <Route path="/restaurant-menu/:id" element={<RestaurantMenu />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
