import { useState, useEffect } from "react";
import { getSushiType } from "../../../../services/sushiService";
import { SushiProducts } from "../SushiProducts/SushiProducts";
import { Container, Background } from "./SelectedTypeEl";

export const SelectedType = ({ match }) => {
  const typeOfSushi = match.params.type;
  const [sushi, setSushi] = useState([]);

  useEffect(() => {
    getSushiType(typeOfSushi)
      .then((res) => setSushi(res))
      .catch((error) => console.log(error.message));
  }, [typeOfSushi]);

  return (
    <>
      <Background />
      <Container>
        {sushi.map((each) => (
          <SushiProducts
            key={each._id}
            _id={each._id}
            title={each.title}
            imageUrl={each.imageUrl}
            portion={each.portion}
            price={each.price}
          />
        ))}
      </Container>
    </>
  );
};

export default SelectedType;
