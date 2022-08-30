import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "./authSlice";

export const loginUser = async (user, dispatch, navigator) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://tgddgroup04.herokuapp.com/api/login",
      user
    );
    dispatch(loginSuccess(res.data));
    navigator("/MovieDetail");
  } catch (err) {
    dispatch(loginFailed());
  }
};
