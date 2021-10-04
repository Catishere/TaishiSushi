import { useRef, useEffect, useContext, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { pushToCart } from "../../../../services/sushiService";

//Context
import { useDispatchCart } from "../../../../Context/CartContext";
import { Context } from "../../../../Context/UserContext";

//Styles
import {
  Card,
  CardContainer,
  CardDetailsContainer,
  SetImage,
  SetPrice,
  SetTitle,
  SetPortion,
  CartBtn,
  SetQty,
  QtyContainer,
  Increment,
  Decrement,
} from "../SushiProducts/SushiProductsElements";

//Tilt
function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

//Component
export const SushiProducts = ({ id, title, imageUrl, portion, price }) => {
  const [user] = useContext(Context);
  const [qty, setQty] = useState(1);
  const sushiData = { id, title, imageUrl, price };
  const dispatch = useDispatchCart();
  const addToCart = (sushi, userId, currQty) => {
    dispatch({ type: "ADD", sushi });
    pushToCart(sushi, userId, currQty).then((response) =>
      console.log(response)
    );
  };

  //Tilt options
  const options = {
    scale: 1.1,
    speed: 1000,
    max: 15,
  };

  //Decrement logic
  const decrement = () => {
    if (qty !== 1) setQty(qty - 1);
  };

  //Increment logic
  const increment = () => {
    setQty(qty + 1);
  };

  const qtyOnChange = (e) => {
    setQty(e.target.value);
  };

  return (
    <CardContainer>
      <Tilt options={options}>
        <Card to={`/menu/details/${id}`}>
          <SetImage src={imageUrl} alt={`${title}`} />
        </Card>
        <SetPrice>{`${price.toFixed(2)} BGN`}</SetPrice>
        <SetTitle> {title} </SetTitle>
        <CardDetailsContainer>
          <SetPortion>{portion}</SetPortion>
          <QtyContainer>
            <Decrement onClick={decrement}>-</Decrement>
            <SetQty value={qty} onChange={(e) => qtyOnChange(e)}></SetQty>
            <Increment onClick={increment}>+</Increment>
          </QtyContainer>
          <CartBtn onClick={() => addToCart(sushiData, user._id, qty)}>
            Add
          </CartBtn>
        </CardDetailsContainer>
      </Tilt>
    </CardContainer>
  );
};
