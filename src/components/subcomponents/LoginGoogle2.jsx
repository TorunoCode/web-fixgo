import React from "react";
import { loginGoogle } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
// Toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGoogleLogin } from "@react-oauth/google";

const LoginGoogle2 = () => {
  const dispatch = useDispatch();
  const login = useGoogleLogin({
    onSuccess: (res) => {
      console.log(res);
      const account = {
        tokenId: res.access_token,
      };
      console.log("token: ", account);
      loginGoogle(account, dispatch, toast);
    },
  });
  return (
    <div>
      <i onClick={() => login()} class="fa-brands fa-google">
        oogle
      </i>
    </div>
  );
};

export default LoginGoogle2;
