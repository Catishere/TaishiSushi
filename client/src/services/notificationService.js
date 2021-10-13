import { store } from "react-notifications-component";

export const addProductErrorNotification = () => {
  store.addNotification({
    title: "Log in to add items",
    message: `Register or log into your existing account in the menu to add products.`,
    type: "danger",
    insert: "top",
    container: "bottom-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
    },
  });
};

export const addProductNotification = (sushi, currQty) => {
  store.addNotification({
    title: "You've added sushi to the cart.",
    message: `${currQty} ${sushi.title} have been added.`,
    type: "info",
    insert: "top",
    container: "bottom-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
    },
  });
};
