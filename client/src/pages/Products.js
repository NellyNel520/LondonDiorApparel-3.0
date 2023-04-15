import React from 'react'
import styled from 'styled-components'
import FeaturedProducts from '../components/FeaturedProducts';
import Newsletter from '../components/Newsletter';
import { mobile } from "../responsive";

const Container = styled.div`

`
const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px 35px 20px 35px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  color: white;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 3px;
  margin-right: 20px;
  border-radius: 5px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;


const Products = () => {
  return (
    <Container className='font-play'>
    <Title className='text-6xl text-center pt-5 text-blue-400 font-play'>Category</Title>
    <FilterContainer>
      <Filter >
        <FilterText>Filter Products:</FilterText>
        <Select name="color" >
          <Option disabled>Color</Option>
          <Option>white</Option>
          <Option>black</Option>
          <Option>red</Option>
          <Option>blue</Option>
          <Option>yellow</Option>
          <Option>green</Option>
        </Select>
        <Select name="size" >
          <Option disabled >Size</Option>
          <Option>XS</Option>
          <Option>S</Option>
          <Option>M</Option>
          <Option>L</Option>
          <Option>XL</Option>
        </Select>
      </Filter>
      <Filter>
        <FilterText>Sort Products:</FilterText>
        <Select>
          <Option value="newest">Newest</Option>
          <Option value="asc">Price (asc)</Option>
          <Option value="desc">Price (desc)</Option>
        </Select>
      </Filter>
    </FilterContainer>
    <FeaturedProducts />
    <Newsletter />
  </Container>
  )
}

export default Products