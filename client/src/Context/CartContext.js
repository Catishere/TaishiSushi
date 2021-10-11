import React, { useReducer, useContext, createContext } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (state.find((e) => e.sushi._id === action.sushi.sushi._id))
        return state.map((product) => {
          if (product.sushi._id === action.sushi.sushi._id)
            product.qty += action.sushi.qty;
          return product;
        });
      return [...state, action.sushi];
    case "REMOVE":
      return state.filter((product) => product.sushi._id !== action.sushiId);
    case "UPDATE":
      return action.sushi;
    default:
      throw new Error(`unknown action ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
