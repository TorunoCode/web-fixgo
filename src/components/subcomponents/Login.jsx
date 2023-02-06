import React, { useState } from "react";
import "../../sass/components/subcomponents/login.scss";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
// Toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ ModalLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const test = { email, password };
  const dispatch = useDispatch();
  const [validationMsg, setValidationMsg] = useState({});

  const validateAll = () => {
    var reg = /^\w+@[a-zA-Z]{3,}\.com$/i;
    const msg = {};
    if (!email) {
      msg.email = "Please input your Email";
    } else if (!reg.test(email)) {
      msg.email = "Your-email is incorrect";
    }

    if (!password) {
      msg.password = "Please input your Password";
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
    };
    const isValid = validateAll();
    if (!isValid) return;
    loginUser(newUser, dispatch, toast);
  };

  return (
    <div className="modal_login">
      <div className="row_top">
        <div className="title">Welcome to FixGo</div>
        <div className="title_login">Sign In</div>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Your-email@gmail.com"
            className="input_data"
            onChange={(e) => setEmail(e.target.value)}
          />
          {validationMsg.email && (
            <i className="validate">{validationMsg.email}</i>
          )}

          <input
            type="password"
            placeholder="Password.."
            className="input_data"
            onChange={(e) => setPassword(e.target.value)}
          />
          {validationMsg.password && (
            <i className="validate">{validationMsg.password}</i>
          )}
          <div className="flex">
            <div className="label_checkbox">
              <input type="checkbox" />
              &nbsp;Remember me
            </div>
            <Link to="/" className="forgot">
              Forgot password?
            </Link>
          </div>
          <button className="btnLogin">Login</button>
        </form>
      </div>

      <div className="row_bot">
        <div className="txt_signup">
          Don't have an account?&nbsp;
          <div className="link" onClick={() => ModalLogin(false)}>
            Sign Up
          </div>
        </div>
        <div className="txt">--- or sign in with ---</div>
        <div className="login_icon">
          <i class="fa-brands fa-facebook-f">acebook</i>&emsp;
          <i class="fa-brands fa-google">oogle</i>
        </div>
      </div>
    </div>
  );
};

export default Login;
