import React, { useState } from "react";
import { registerUser } from "../../redux/apiRequest";
import "../../sass/components/subcomponents/register.scss";
import { useDispatch } from "react-redux";
// Toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// const Register = ({ ModalLogin, ModalRegister }) => {
export const Register = ({ ModalLogin }) => {
	// vì onclick chỉ xử lí 1 event --> tạo hàm ngoài chạy 2 event cùng lúc
	// function someFunc() {
	//   ModalLogin(true);
	// }

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const dispatch = useDispatch();

	const [validationMsg, setValidationMsg] = useState({});

	const validateAll = () => {
		var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		const msg = {};
		if (!email) {
			msg.email = "Please input your Email";
		} else if (!reg.test(email)) {
			msg.email = "Your-email is incorrect";
		}
		if (!password) {
			msg.password = "Please input your password";
		}
		if (!username) {
			msg.username = "Please input your username";
		} else if (username.length > 15) {
			msg.username = "Username must be less than 15 characters";
		}
		setValidationMsg(msg);
		if (Object.keys(msg).length > 0) return false;
		return true;
	};

	const handleRegister = (e) => {
		e.preventDefault();
		const newUser = {
			email: email,
			password: password,
			name: username,
		};
		const isValid = validateAll();
		if (!isValid) return;
		registerUser(newUser, dispatch, toast);
	};
	const [t, setT] = useState(true);
	const [type, setType] = useState("password");
	const handleShowHide = () => {
		setT(!t);
		if (t) setType("text");
		else setType("password");
	};
	return (
		<div className='modal_register'>
			<div className='row_top'>
				<div className='title'>Welcome to FixGo</div>
				<div className='title_register'>Sign Up</div>
				<form onSubmit={handleRegister}>
					<input
						type='email'
						placeholder='Your-mmail address..'
						className='input_data'
						onChange={(e) => setEmail(e.target.value)}
					/>
					{validationMsg.email && (
						<i className='validate'>{validationMsg.email}</i>
					)}
					<div className='parent_input'>
						<input
							type={type}
							placeholder='Password..'
							className='input_data'
							onChange={(e) => setPassword(e.target.value)}
						/>
						{validationMsg.password && (
							<i className='validate'>{validationMsg.password}</i>
						)}
						{password && (
							<div className='eye' onClick={handleShowHide}>
								{t ? (
									<i class='fa-regular fa-eye'></i>
								) : (
									<i class='fa-regular fa-eye-slash'></i>
								)}
							</div>
						)}
					</div>

					<input
						type='text'
						placeholder='Username..'
						className='input_data'
						onChange={(e) => setUsername(e.target.value)}
					/>
					{validationMsg.username && (
						<i className='validate'>{validationMsg.username}</i>
					)}
					<button className='btnLogin'>Register</button>
				</form>
			</div>
			<div className='row_bot'>
				<div className='txt_signup'>
					Have already an account?&nbsp;
					{/* <div className="link" onClick={someFunc}> */}
					<div className='link' onClick={() => ModalLogin(true)}>
						Sign In
					</div>
				</div>
			</div>
		</div>
	);
};
