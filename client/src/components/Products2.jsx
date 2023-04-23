import React from 'react'
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductCard from './ProductCard';
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from '../global'



const Container = styled.div`
 padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products2 = ({category, filters, sort}) => {
  // console.log(category, filters, sort) IT WORKS
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Axios call to sort products by category
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `${BASE_URL}/products/?category=${category}`
            : `${BASE_URL}/products`
        );
        console.log(res)
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [category]);

 // Axios call to sort by category and filter by size and color products 
 useEffect(() => {
  category &&
    setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
}, [products, category, filters]);

// axios call to sort by price and date added 
useEffect(() => {
  if (sort === "newest") {
    setFilteredProducts((prev) =>
      [...prev].sort((a, b) => a.createdAt - b.createdAt)
    );
  } else if (sort === "asc") {
    setFilteredProducts((prev) =>
      [...prev].sort((a, b) => a.price - b.price)
    );
  } else {
    setFilteredProducts((prev) =>
      [...prev].sort((a, b) => b.price - a.price)
    );
  }
}, [sort]);




  return (
    <Container>
    {category
      ? filteredProducts.map((item) => <ProductCard item={item} key={item.id} />)
      : products
          
          .map((item) => <ProductCard item={item} key={item.id} />)}
  </Container>
  )
}

export default Products2