import axios from "axios";
import {
  loginStart,
  loginSuccess,
  loginFailed,
  registerFailed,
  registerStart,
  registerSuccess,
} from "./authSlice";

export const loginUser = async (user, dispatch, toast) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://backend-boo.herokuapp.com/api/user/login",
      user
    );
    toast.success("Login success!", { autoClose: 2000 });
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
      "https://backend-boo.herokuapp.com/api/user/signUp",
      user
    );
    dispatch(registerSuccess(res.data));
    toast.success("Create successful account!", { autoClose: 2000 });
  } catch (err) {
    toast.error(err.response.data?.message, { autoClose: 2000 });
    dispatch(registerFailed());
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
