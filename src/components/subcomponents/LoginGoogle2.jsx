import React from "react";
import { loginGoogle } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
// Toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGoogleLogin } from "@react-oauth/google";

export const LoginGoogle2 = () => {
	const dispatch = useDispatch();
	const login = useGoogleLogin({
		onSuccess: (res) => {
			// console.log(res);
			const account = {
				access_token: res.access_token,
				tokenId: "aaa",
			};
			// console.log("token: ", account);
			loginGoogle(account, dispatch, toast);
		},
	});
	return (
		<div onClick={() => login()}>
			<i class='fa-brands fa-google'>oogle</i>
		</div>
	);
};
