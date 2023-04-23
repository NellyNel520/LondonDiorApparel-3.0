import { Route, Routes } from 'react-router-dom'
import {
  Switch,
  Redirect,
  Navigate
} from "react-router-dom";
import React from 'react'
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./styles/App.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from '../src/pages/login/Login';
import { useSelector } from "react-redux";

const App = () => {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  return (
    <div>

        
        <Routes>
          <Route path='/login' element={<Login />} />
          

         
          <Route path="/" element={admin ? (<Home  />) : (<Navigate replace to="/login" />)} />
          <Route path="/users" element={ <UserList />} />
          <Route path="/user/:userId" element={ <User />} />
          <Route path="/newUser" element={ <NewUser />} />
          <Route path="/products" element={ <Product />} />
          <Route path="/newproduct" element={ <NewProduct />} />
        

        </Routes>
       
  
    </div>
  )
}

export default App