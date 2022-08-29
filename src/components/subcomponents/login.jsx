import React from "react";
import "../../sass/components/subcomponents/login.scss";
import { Link } from "react-router-dom";
// const Login = ({ ModalLogin, ModalRegister }) => {
const Login = ({ ModalLogin }) => {
  // vì onclick chỉ xử lí 1 event --> tạo hàm ngoài chạy 2 event cùng lúc
  // function someFunc() {
  //   ModalLogin(false);
  //   ModalRegister(true);
  // }
  return (
    <div className="modal_login">
      <div className="row_top">
        <div className="title">Welcome to FixGo</div>
        <div className="title_login">Sign In</div>
        <div className="txt"></div>
        <input
          type="email"
          placeholder="Email.."
          className="input_data"
          required
        />
        <input
          type="password"
          placeholder="Password.."
          className="input_data"
          required
        />
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
