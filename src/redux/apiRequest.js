import axios from "axios";
import {
  loginStart,
  loginSuccess,
  loginFailed,
  registerFailed,
  registerStart,
  registerSuccess,
  updateStart,
  update,
} from "./authSlice";

export const loginUser = async (user, dispatch, toast) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://backend-boo.vercel.app/api/user/login",
      user
    );
    // console.log(res);
    toast.success("Login success!", { autoClose: 2000 });
    dispatch(loginSuccess(res.data));
  } catch (err) {
    toast.error(err.response.data?.message, { autoClose: 2000 });
    dispatch(loginFailed());
  }
};

// Login Google Account
export const loginGoogle = async (user, dispatch, toast) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      " https://backend-boo.vercel.app/api/oAuthGoogleRoutes/login",
      user
    );
    console.log(res);
    toast.success("Successful login with Google!", { autoClose: 2000 });
    dispatch(loginSuccess(res.data));
  } catch (err) {
    toast.error(err.response.data?.message, { autoClose: 2000 });
    dispatch(loginFailed());
  }
};

// Login Facebook Account
export const loginFacebook = async (user, dispatch, toast) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("", user);
    console.log(res);
    toast.success("Successful login with Facebook!", { autoClose: 2000 });
    dispatch(loginSuccess(res.data));
  } catch (err) {
    toast.error(err.response.data?.message, { autoClose: 2000 });
    dispatch(loginFailed());
  }
};

export const registerUser = async (user, dispatch, toast) => {
  dispatch(registerStart());
  try {
    const res = await axios.post(
      "https://backend-boo.vercel.app/api/user/signUp",
      user
    );
    dispatch(registerSuccess(res.data));
    toast.success("Create successful account!", { autoClose: 2000 });
  } catch (err) {
    toast.error(err.response.data?.message, { autoClose: 2000 });
    dispatch(registerFailed());
  }
};

export const updateProfile = async (user, dispatch, toast) => {
  dispatch(updateStart());
  try {
    const res = await axios.post(
      `https://backend-boo.vercel.app/api/user/update`,
      user
    );
    // console.log(res.data);
    await dispatch(update(res.data));
    toast.success("Edit success !", { autoClose: 2000 });
  } catch (err) {
    toast.error("Failed to edit!", { autoClose: 2000 });
  }
};

// export const postFeedback = async (postFeedback, dispatch, toast) => {
//   try {
//     const res = await axios.post("/add_feadback", postFeedback);
//     toast.success("Post feedback success!", { autoClose: 2000 });
//     dispatch(createPostFeedback(res.data));
//   } catch (error) {
//     toast.error("error");
//   }
// };
