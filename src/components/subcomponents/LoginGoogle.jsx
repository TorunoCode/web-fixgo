import React from "react";
import { useEffect } from "react";
import GoogleLogin from "@leecheuk/react-google-login";
import { gapi } from "gapi-script";
import { loginGoogle } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
// Toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginGoogle = () => {
  const clientId =
    "1049176429942-4243i6lqlhfu6cdcbu4lk9aitn2tijj6.apps.googleusercontent.com";

  const dispatch = useDispatch();

  const onSuccess = (res) => {
    console.log("Login ok: ", res);
    const account = {
      tokenId: res.tokenId,
    };
    console.log("token: ", account);
    loginGoogle(account, dispatch, toast);
  };

  const onFailure = (res) => {
    console.log("Login fail: ", res);
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <div className="google">
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => (
          <i onClick={renderProps.onClick} class="fa-brands fa-google">
            oogle
          </i>
        )}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default LoginGoogle;
