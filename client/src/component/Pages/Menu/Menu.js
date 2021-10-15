import { Background, Container, Card, LinkTo } from "./MenuElements";
import { useState, useEffect } from "react";
import { getCategories } from "../../../services/sushiService";

export const Menu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      <Background />
      <Container>
        {categories.map((category) => (
          <Card
            key={category._id}
            style={{
              backgroundImage: `url('${category.image}')`,
              backgroundSize: "cover",
            }}
          >
            <LinkTo to={category.endpoint}>{category.title}</LinkTo>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default Menu;
