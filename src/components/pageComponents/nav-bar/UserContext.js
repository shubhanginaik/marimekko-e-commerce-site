import React, { createContext, useState } from "react";

export const AppContext = createContext();
const { Provider } = AppContext;
export const AppProvider = (props) => {
  const [userName, setUserName] = useState([]);

  return <Provider value={[userName, setUserName]}>{props.children}</Provider>;
};
