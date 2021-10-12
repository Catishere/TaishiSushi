import { useEffect, useContext } from "react";

//UserContext
import { Context } from "../../../Context/UserContext";

//Service
import {
  getUserCart,
  deleteFromCart,
  pushToCart,
} from "../../../services/sushiService";

import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiFillDelete,
} from "react-icons/ai";
import { useCart, useDispatchCart } from "../../../Context/CartContext";

import {
  Container,
  Title,
  Product,
  ProductDetail,
  ProductsContainer,
  ProductTitle,
} from "./CartStyles";

const Cart = () => {
  const [user] = useContext(Context);
  const cart = useCart();
  const dispatch = useDispatchCart();

  //Getting user cart array------------------------------------------------
  useEffect(() => {
    if (user && user._id) {
      getUserCart(user._id).then((userCart) =>
        dispatch({ type: "UPDATE", sushi: userCart })
      );
    }
  }, [user, dispatch]);

  //Delete product from cart -----------------------------------------------
  const deleteHandler = (sushiId, userId) => {
    dispatch({ type: "REMOVE", sushiId });
    deleteFromCart(sushiId, userId);
  };

  const incrementHandler = async (prod, userId) => {
    prod.qty++;
    dispatch({ type: "CHANGE", sushi: prod });
    await pushToCart(prod.sushi._id, userId, 1);
  };

  const decrementHandler = async (prod, userId) => {
    if (prod.qty > 1) {
      prod.qty--;
      dispatch({ type: "CHANGE", sushi: prod });
      await pushToCart(prod.sushi._id, userId, -1);
    }
  };
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <ProductsContainer>
        {cart.map((prod) => (
          <Product key={prod.sushi._id}>
            <img
              src={prod.sushi.imageUrl}
              alt="Product"
              width="100"
              height="70"
            ></img>
            <ProductTitle>{prod.sushi.title}</ProductTitle>
            <ProductDetail>{"x" + prod.qty}</ProductDetail>
            <ProductDetail>
              {(prod.sushi.price * prod.qty).toFixed(2) + "BGN"}
            </ProductDetail>
            <ProductDetail>
              <AiFillPlusCircle
                onMouseOver={({ target }) => (target.style.color = "darkgreen")}
                onMouseOut={({ target }) => (target.style.color = "green")}
                style={{ color: "green", cursor: "pointer" }}
                size="40px"
                onClick={incrementHandler.bind(this, prod, user._id)}
              />
              <AiFillMinusCircle
                onMouseOver={({ target }) => (target.style.color = "darkred")}
                onMouseOut={({ target }) => (target.style.color = "red")}
                style={{
                  cursor: "pointer",
                  display: prod.qty === 1 ? "none" : "inline-block",
                }}
                color={"red"}
                size="40px"
                onClick={decrementHandler.bind(this, prod, user._id)}
              />
              <AiFillDelete
                onMouseOver={({ target }) => (target.style.color = "#444444")}
                onMouseOut={({ target }) => (target.style.color = "#111111")}
                style={{ color: "#111111", cursor: "pointer" }}
                size="40px"
                onClick={deleteHandler.bind(this, prod.sushi._id, user._id)}
              />
            </ProductDetail>
          </Product>
        ))}
      </ProductsContainer>
    </Container>
  );
};

export default Cart;
