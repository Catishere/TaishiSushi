import { useEffect, useState } from "react";
import url from "../../utils/connectionUrl";
import { useDispatchCart } from "../../Context/CartContext";
import {
  addProductErrorNotification,
  addProductNotification,
} from "../../services/notificationService";

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

import { pushToCart } from "../../services/sushiService";
import { getUser } from "../../services/getUser";

const Products = ({ heading, match }) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatchCart();

  useEffect(() => {
    fetch(`${url}/api/sushi/latest`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((error) => console.log(error));
  }, []);

  const addToCart = async (product, qty) => {
    const user = await getUser();
    if (!user || !user._id) {
      addProductErrorNotification();
      return;
    }
    addProductNotification(product, qty);
    dispatch({ type: "ADD", sushi: { sushi: product, qty } });
    await pushToCart(product._id, user._id, qty);
  };

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
                  <ProductButton onClick={addToCart.bind(this, product, 1)}>
                    Add to cart
                  </ProductButton>
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
