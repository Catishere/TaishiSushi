import { useEffect, useState } from "react";

import {
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPortion,
  ProductPrice,
  ProductButton,
} from "./ProductsElements";

const Products = ({ heading, match }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.URL || "http://localhost"}:${
        process.env.PORT || process.env.REACT_APP_PORT
      }/api/home`
    )
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>
          {products?.map((product) => {
            return (
              <ProductCard key={product._id}>
                <ProductImg src={`${product.imageUrl}`} />
                <ProductInfo>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductDesc>{product.description}</ProductDesc>
                  <ProductPortion>{product.portion} g</ProductPortion>
                  <ProductPrice>{product.price.toFixed(2)} BGN</ProductPrice>
                  <ProductButton to="/menu/futomaki">Add to cart</ProductButton>
                </ProductInfo>
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </ProductsContainer>
    </div>
  );
};

export default Products;
