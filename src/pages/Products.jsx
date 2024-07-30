import React from "react";
import styled from "styled-components";

const Products = () => {
  return (
    <Wrapper>
      <h1>Products</h1>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Products;
