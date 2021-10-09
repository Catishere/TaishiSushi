import { useEffect, useState } from "react";
import url from "../../utils/connectionUrl";

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
    fetch(`${url}/api/home`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
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
