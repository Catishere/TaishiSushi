import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  margin: 10px;
  user-select: none;
`;

export const Product = styled.div`
  padding: 10px;
  min-height: 80px;
  justify-content: left;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-top: solid 1px #1a1717;
`;

export const Title = styled.div`
  margin: 5px 10px;
`;

export const Container = styled.div`
  background-color: #e1b587;
  padding: 60px 0;
  height: 100%;
  width: 100%;
`;

export const ProductDetail = styled.div`
  margin: 0 10px;
  flex: 1;
`;

export const ProductTitle = styled(ProductDetail)`
  flex: 3;
`;
