import "./App.css";

import { useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { getUser } from "./services/getUser";
import { Context } from "./Context/UserContext";

import Navbar from "./component/Navbar/Navbar";
import HomePage from "./component/Pages/HomePage/HomePage";
import AddPage from "./component/Pages/AddPage/AddPage";
import LoginPage from "./component/Pages/LoginPage/LoginPage";
import RegisterPage from "./component/Pages/RegisterPage/RegisterPage";
import Menu from "./component/Pages/Menu/Menu";
import Cart from "./component/Pages/Cart/Cart";
import SelectedType from "./component/Pages/Menu/SelectedType/SelectedType";
import Details from "./component/Pages/Details/Details";
import Footer from "./component/Footer/Footer";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { getUserCart } from "./services/sushiService";
import { useDispatchCart } from "./Context/CartContext";

function App() {
  const [user, setUser] = useContext(Context);
  const dispatch = useDispatchCart();

  useEffect(() => {
    getUser()
      .then((currentUser) => {
        if (currentUser)
          setUser({ _id: currentUser._id, username: currentUser.username });
      })
      .catch((err) => console.log(err));
  }, [setUser]);

  useEffect(() => {
    console.log(
      `port ${process.env.PORT} react port ${process.env.REACT_APP_PORT}`
    );
    getUserCart(user._id)
      .then((res) => {
        dispatch({ type: "UPDATE", sushi: res });
      })
      .catch((error) => console.log(error.message));
  }, [user, dispatch]);

  return (
    <div name="App">
      <ReactNotification className="cart-notif" />
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/menu/:type" exact component={SelectedType} />
        <Route path="/menu/details/:id" exact component={Details} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/add" exact component={AddPage} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
