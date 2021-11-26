import React from "react";
import { NavLink, Redirect } from "react-router-dom";
const logout = () => {
  return (
    <div>
      <Redirect to={{ pathname: "/" }} />
    </div>
  );
};

export default logout;
