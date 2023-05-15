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
import { BASE_URL } from "../constants";

export const loginUser = async (user, dispatch, toast) => {
	dispatch(loginStart());
	try {
		const res = await axios.post(`${BASE_URL}/api/user/login`, user);
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
			`${BASE_URL}/api/oAuthGoogleRoutes/login`,
			user
		);
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
		const res = await axios.post(
			`${BASE_URL}/api/oAuthFacebookRoutes/login`,
			user
		);
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
		const res = await axios.post(`${BASE_URL}/api/user/signUp`, user);
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
		const res = await axios.post(`${BASE_URL}/api/user/update`, user);
		await dispatch(update(res.data));
		toast.success("Update profile success!", { autoClose: 2000 });
	} catch (err) {
		toast.error(err.message, { autoClose: 2000 });
	}
};
