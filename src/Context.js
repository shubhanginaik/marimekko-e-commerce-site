import React, { createContext, useState } from "react";

export const AppContext = createContext();
const { Provider } = AppContext;
export const AppProvider = (props) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  //console.log(itemsInCart);

  return (
    <Provider value={[itemsInCart, setItemsInCart]}>{props.children}</Provider>
  );
};
