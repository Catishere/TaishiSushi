import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../services/Logout";
//Styles
import "./Navbar.css";

//Contexts
import { Context } from "../../Context/UserContext";
import { useCart } from "../../Context/CartContext";

const Navbar = () => {
  const [user, setUser] = useContext(Context);
  const [click, setClick] = useState(false);

  const handlerLogout = () => {
    return logout()
      .then(() => {
        return setUser({ username: "", _id: "" });
      })
      .catch((err) => console.log(err));
  };

  const checkAdmin = (id) => {
    const adminId = "60d0f1dcdbc74d4808424e95";

    if (id === adminId) return <Link to="/add">+ADD</Link>;
    return "";
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const items = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}></Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars fa-2x"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/order-now" className="nav-links" onClick={closeMobileMenu}>
            Order
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/menu" className="nav-links" onClick={closeMobileMenu}>
            Menu
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact-us"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Contact us
          </Link>
        </li>
        {user.username ? (
          <>
            <li className="nav-item nav-item-end">
              <Link
                to=""
                className="nav-links"
                onClick={() => {
                  handlerLogout();
                  closeMobileMenu();
                }}
              >
                Logout
              </Link>
            </li>
            <li className="nav-item nav-item-end">
              <Link
                to="/profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {user.username}
              </Link>
            </li>
            <li className="nav-item nav-item-end">
              <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
                <i className="fas fa-shopping-cart" /> (
                {items || items.length !== 0
                  ? items
                      .reduce((sum, a) => sum + a.sushi.price * a.qty, 0)
                      .toFixed(2)
                  : "0.00"}{" "}
                BGN)
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link
                to="/register"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
