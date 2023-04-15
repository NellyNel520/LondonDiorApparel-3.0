import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined'
import PersonIcon from '@mui/icons-material/Person'


const Container = styled.div`
  height: 60px;
  ${'' /* ${mobile({ height: "50px" })} */}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${'' /* ${mobile({ padding: "10px 0px" })} */}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${'' /* ${mobile({ display: "none" })} */}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${'' /* ${mobile({ width: "50px" })} */}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${'' /* ${mobile({ fontSize: "24px" })} */}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${'' /* ${mobile({ flex: 2, justifyContent: "center" })} */}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${'' /* ${mobile({ fontSize: "12px", marginLeft: "10px" })} */}
`;

const Navbar = () => {
  return (
    
    <Container className='text-blue-400' >
    <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer className='rounded'>
            <Input className="text-black" placeholder="Search" />
            <SearchIcon style={{ color: "#0ca2e2", fontSize: 25 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo className='font-ari text-[2rem]'>London Dior Apparel</Logo>
        </Center>
        <Right>
          <Link to={"/register"}><MenuItem className='hover:text-white'>REGISTER</MenuItem></Link>
          <Link to={"/login"}><MenuItem className='hover:text-white'>SIGN IN</MenuItem></Link>
					<Link to={"/"}><MenuItem className='hover:text-white'>HOME</MenuItem></Link>
					<Link to={"/all-products"}><MenuItem className='hover:text-white'>PRODUCTS</MenuItem></Link>
					<Link to={"/about"}><MenuItem className='hover:text-white'>ABOUT</MenuItem></Link>
          <Link to={"/cart"}><MenuItem className='hover:text-white'>
            <Badge badgeContent={0} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar