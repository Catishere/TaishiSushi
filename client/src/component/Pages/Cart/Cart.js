import { useEffect, useContext } from "react";

//UserContext
import { Context } from "../../../Context/UserContext";

//Service
import { getUserCart, deleteFromCart } from "../../../services/sushiService";

import { TiDeleteOutline } from "react-icons/ti";
import { useCart, useDispatchCart } from "../../../Context/CartContext";

import { Container, Table } from "./CartStyles";

const Cart = () => {
  const [user] = useContext(Context);
  const cart = useCart();
  const dispatch = useDispatchCart();

  //Getting user cart array------------------------------------------------
  useEffect(() => {
    getUserCart(user._id)
      .then((res) => {
        dispatch({ type: "UPDATE", sushi: res });
      })
      .catch((error) => console.log(error.message));
  }, [user, dispatch]);

  //Delete product from cart -----------------------------------------------
  const deleteHandler = (sushiId, userId) => {
    dispatch({ type: "REMOVE", sushiId });
    deleteFromCart(sushiId, userId);
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th colSpan="4">Shopping Cart</th>
          </tr>
        </thead>
        {cart.map((sushi) => (
          <tbody key={sushi.id}>
            <tr>
              <td>
                <img
                  src={sushi.imageUrl}
                  alt="Product"
                  width="80"
                  height="55"
                ></img>
              </td>
              <td>{sushi.title}</td>
              <td>{"x" + sushi.qty}</td>
              <td>{(sushi.price * sushi.qty).toFixed(2) + "BGN"}</td>
              <td>
                <button onClick={deleteHandler.bind(this, sushi.id, user._id)}>
                  <TiDeleteOutline />
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Container>
  );
};

export default Cart;
