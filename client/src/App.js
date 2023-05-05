import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Announcement from './components/Announcement'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Newsletter from './components/Newsletter'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart' 
import About from './pages/About'
import EditUser from './pages/profilePages/EditUser'
import UserProfile from './pages/profilePages/UserProfile'
import OrderHistory from './pages/profilePages/OrderHistory'
import { useSelector, useDispatch } from 'react-redux'
import { logout, clearCart } from './redux/userRedux'
// import { clearCart } from "./redux/cartRedux";
import { useNavigate } from 'react-router-dom'
import Success from './pages/Success'

function App() {
	const user = useSelector((state) => state.user.currentUser)

	const dispatch = useDispatch()
	let navigate = useNavigate()

	const handleLogOut = (e) => {
		//Reset all auth related state and clear localStorage
		e.preventDefault()
		dispatch(logout())
		navigate('/')
	}

	// const clearCart = (e) => {
	// 	//Reset all auth related state and clear localStorage
	//   e.preventDefault();
	//   dispatch(clearCart())
	//   navigate("/cart")
	// }

	// // Clear Cart
	// const clearCart = (e) => {
	//     e.preventDefault();
	//   dispatch(clearCart());
	// };

	return (
		<div>
			<Navbar user={user} handleLogOut={handleLogOut} />
			<Announcement user={user} />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/products/:category" element={<Products />} />
					<Route path="/products" element={<Products />} />
					<Route path="/product/:id" element={<ProductDetails />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/about" element={<About />} />
					<Route path="/success" element={<Success />} />
					<Route path="/profile" element={<UserProfile user={user} />} />
					<Route path="/profile/edit" element={<EditUser user={user} />} />
					<Route
						path="/profile/orderHistory"
						element={<OrderHistory user={user} />}
					/>
				</Routes>
			</main>
			<Newsletter />
			<Footer />
		</div>
	)
}

export default App
