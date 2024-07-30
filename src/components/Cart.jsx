import React from "react";
import styled from "styled-components";


const Cart = () => {
  return <Wrapper>Cart</Wrapper>;
};
const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Cart;
