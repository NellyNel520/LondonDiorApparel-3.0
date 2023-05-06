import { Route, Routes } from 'react-router-dom'
import { Switch, Redirect, Navigate } from 'react-router-dom' 
import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import './styles/App.css'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'
import OrderList from './pages/orderList/OrderList'
import Product from './pages/product/Product'
import NewProduct from './pages/newProduct/NewProduct'
import Login from '../src/pages/login/Login'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from './redux/userRedux';

const App = () => {
	// const admin = useSelector((state) => state.user.currentUser.isAdmin);
	const user = useSelector((state) => state.user.currentUser)
	const dispatch = useDispatch()
  let navigate = useNavigate()

	
  const handleLogOut = (e) => {
		//Reset all auth related state and clear localStorage
    e.preventDefault();
    dispatch(logout())
    navigate("/")
	}

	return (
		<div>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<Home handleLogOut={handleLogOut}/>} />
				 <Route path="/users" element={ <UserList handleLogOut={handleLogOut}/>} /> 
				<Route path="/user/:userId" element={ <User handleLogOut={handleLogOut}/>} />
				<Route path="/newUser" element={ <NewUser handleLogOut={handleLogOut}/> } />
				<Route path="/product/:productId" element={<Product handleLogOut={handleLogOut}/>} />
        <Route path="/products" element={<ProductList handleLogOut={handleLogOut}/>} /> 
				<Route path="/orders" element={<OrderList handleLogOut={handleLogOut}/>} /> 
				<Route path="/newproduct" element={<NewProduct handleLogOut={handleLogOut}/>} /> 
			</Routes>
		</div>
	)
} 

export default App
