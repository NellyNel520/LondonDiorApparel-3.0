import { Route, Routes } from 'react-router-dom'
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

const App = () => {
  return (
    <div>
      <Topbar />
      <main className='container'>
        <Sidebar />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/users" element={ <UserList />} />
          <Route path="/user/:userId" element={ <User />} />
          <Route path="/newUser" element={ <NewUser />} />
          <Route path="/products" element={ <Product />} />
          <Route path="/newproduct" element={ <NewProduct />} />
        </Routes>
       
      </main>
    </div>
  )
}

export default App