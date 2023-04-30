import React, { useState } from "react";
import axios from "axios";
// Toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../constants";

export const ForgetPassword = ({ email, setForgot }) => {
	const [otp, SetOtp] = useState("");
	const [newpassword, setNewPassword] = useState("");
	const [validationMsg, setValidationMsg] = useState({});

	const validateAll = () => {
		const msg = {};
		if (!otp) {
			msg.otp = "Please input OTP Code";
		}
		if (!newpassword) {
			msg.newpassword = "Please input new password";
		}

		setValidationMsg(msg);
		if (Object.keys(msg).length > 0) return false;
		return true;
	};

	const handleForgot = async (e) => {
		e.preventDefault();
		const isValid = validateAll();
		if (!isValid) return;
		const changePassword = {
			email: email,
			OTP: otp,
			newpassword: newpassword,
		};
		try {
			const res = await axios.post(
				`${BASE_URL}/api/password/forgotpasswordchangepass`,
				changePassword
			);
			toast.success(res.data?.message, { autoClose: 2000 });
			setForgot(false);
		} catch (err) {
			toast.error(err.response.data?.message, { autoClose: 2000 });
		}
	};

	return (
		<div>
			<form onSubmit={handleForgot}>
				<div className='title_update'>Update new password:</div>
				<div className='text'>
					OTP Code has been sent to your email. <br />({email})
				</div>
				<input
					type='search'
					placeholder='OTP Email'
					className='input_data'
					onChange={(e) => SetOtp(e.target.value)}
				/>
				{validationMsg.otp && <i className='validate'>{validationMsg.otp}</i>}
				<input
					type='password'
					placeholder='New password'
					className='input_data'
					onChange={(e) => setNewPassword(e.target.value)}
				/>
				{validationMsg.newpassword && (
					<i className='validate'>{validationMsg.newpassword}</i>
				)}
				<button className='btnLogin'>Update</button>
			</form>
		</div>
	);
};
