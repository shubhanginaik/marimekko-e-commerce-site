import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import login from "./login.svg";
import login_gg from "./login-gg.svg";
import welcome from "./welcome.svg";
import close from "./close-login.svg";
import person from "./person-login.svg";
import key from "./key-login.svg";

function LoginNew() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/dashboard");
  }, [user, loading]);
  return (
    <div className="login">
      <div className="login__container">
        <img className="welcome" src={welcome} alt="" />
        <img className="close-login" src={close} alt="" />
        <div className="login__textBox">
          <input
            className="login_textBox"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <img className="person" src={person} alt="" />
        </div>
        <div className="login__textBox">
          <input
            className="login_textBox"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <img className="key" src={key} alt="" />
        </div>
        <button
          className="login__btn"
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          <img src={login} alt="" />
        </button>
        <button className="login__btn" onClick={signInWithGoogle}>
          <img src={login_gg} alt="" />
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}

export default LoginNew;
