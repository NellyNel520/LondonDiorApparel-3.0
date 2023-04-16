import React from 'react'
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductCard from './ProductCard';
import { useEffect, useState } from "react";
import axios from "axios";
// import { BASE_URL } from '../global'



const Container = styled.div`
 padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const FeaturedProducts = () => {
  

  return (
    <Container>
    {popularProducts.map((item) => (
      <ProductCard item={item} key={item.id} />
    ))}
  </Container>
  )
}

export default FeaturedProducts