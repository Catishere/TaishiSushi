import { useContext } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../services/Logout";

//Styles
import { NavLink, Nav, NavUser, NavLogo, Container } from "./NavbarElements";
import { ReactComponent as Logo } from "../../resources/Logo.svg";

//Contexts
import { Context } from "../../Context/UserContext";
import { useCart } from "../../Context/CartContext";

const Navbar = () => {
  const [user, setUser] = useContext(Context);

  const handlerLogout = () => {
    return logout()
      .then(() => {
        return setUser({ username: "", _id: "" });
      })
      .catch((err) => console.log(err));
  };

  const checkAdmin = (id) => {
    const adminId = "60d0f1dcdbc74d4808424e95";

    if (id === adminId) return <NavLink to="/add">+ADD</NavLink>;
    return "";
  };

  const items = useCart();

  return (
    <Container>
      <NavLogo>
        <Link to="/">
          <Logo>
            <logo to="/"></logo>
          </Logo>
        </Link>
      </NavLogo>
      <Nav>
        <NavLink to="/order-now">Order</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/contact-us">Contact us</NavLink>
      </Nav>

      <NavUser>
        {checkAdmin(user._id)}

        {user.username ? (
          <>
            <NavLink to="" onClick={handlerLogout}>
              Logout
            </NavLink>
            <NavLink to="/profile">{user.username}</NavLink>
            <NavLink to="/cart">
              <i className="fas fa-shopping-cart" /> (
              {items
                .reduce((sum, a) => {
                  return sum + a.price * a.qty;
                }, 0)
                .toFixed(2)}{" "}
              BGN)
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </NavUser>
    </Container>
  );
};

export default Navbar;
