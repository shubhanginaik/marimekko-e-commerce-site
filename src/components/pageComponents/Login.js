import React, {Component} from 'react';
import "../pageComponents/Login.css";

class Login extends Component {
  state = {
    username:"",
    password:""
  }


  render() {
    return (
        <div className="loginwrapper">
          <form className="box">
            <h1>Login Page</h1>
            <label>
              <input type="text" placeholder="Enter username" required  />
            </label>
            <label>
              <input type="password" placeholder="Enter password" required />
            </label>
            <div>
              <input  type="submit" value="Login" />
            </div>
          </form>
        </div>
    );
  }
}

export default Login;