import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Foodcourt from './components/Foodcourt' // Import your other components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Import router components
import MenuPage from './pages/MenuPage'
import RestaurantMenu from './components/RestaurantMenu'
import { AuthProvider } from './utils/AuthContext'
import PrivateRoutes from './utils/PrivateRoutes'
import Cart from './components/Cart'
import PaymentSuccess from './components/PaymentSuccess'
import StripePayment from './components/StripePayment'
import Paymentalternative from './components/Paymentalternative'
import Ordercomplete from './components/Ordercomplete'
function App() {
	return (
		<Router>
			<AuthProvider>
				<div className="App">
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route element={<PrivateRoutes />}>
							<Route path="/foodcourt" element={<Foodcourt />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="/foodcourt/menu" element={<MenuPage />} />
							<Route path="/restaurant-menu/:id" element={<RestaurantMenu />} />
							{/* <Route path="/payment" element={<StripePayment />} /> */}
							<Route path="/success" element={<PaymentSuccess />} />
							<Route path="/payment" element={<Paymentalternative />} />
							<Route path="/ordercomplete" element={<Ordercomplete />} />
						</Route>
					</Routes>
					<Footer />
				</div>
			</AuthProvider>
		</Router>
	)
}

export default App
