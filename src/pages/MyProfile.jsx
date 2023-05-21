import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { loginUser } from "../redux/apiRequest";
import "../sass/pages/myprofile.scss";
import AvtDefault from "../assets/images/avt_user_default.png";
import BackgroundDefault from "../assets/images/backgroudUserDefault.png";
// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { updateProfile } from "../redux/apiRequest";
import axios from "axios";
import { Button, Grid, Stack, TextField } from "@mui/material";
import { BASE_URL } from "../constants";
import { InputFields, Loading } from "../components";

export const MyProfile = () => {
	const user = useSelector((state) => state.auth.login?.currentUser);
	const pending = useSelector((state) => state.auth.login?.isupdate);
	// upload image
	const [image, setImage] = useState();
	///////
	const [passCurrent, setPassCurrent] = useState("");
	const [passNew, setPassNew] = useState("");
	const [fullname, setFullname] = useState(user?.data.fullName || "No data");
	const [phone, setPhone] = useState(user?.data.phone || "No data");
	const [avatar, setAvatar] = useState(
		user?.data.avatar ||
			"http://localhost:3000/static/media/avt_user_default.a26103ea1b8f52ce1b13.png"
	);

	const [gender, setGender] = useState(user?.data.gender || "No data");
	const [addMoney, setAddMoney] = useState(0);
	const [money, setMoney] = useState("");
	const [addPayPal, setAddPayPal] = useState(false);
	const [addVN, setAddVN] = useState(false);
	// const [dateofBbirth, setDateofBirth] = useState("01-01-2001");
	const [biography, setBiography] = useState(
		user?.data.biography ||
			"I’m everything you ever want to be but can’t have or be."
	);

	const [validationMsg, setValidationMsg] = useState({});
	const [validationMsgChangePassword, setValidationMsgChangePassword] =
		useState({});

	const [modal, setModal] = useState(false);

	const validateAll = () => {
		var reg_fullname =
			/^([a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]{2,6})((\s{1}[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]{2,6}){1,4})$/;
		var reg_phone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
		var reg_avatar = /\.(jpeg|jpg|gif|png)$/;
		const msg = {};

		if (!reg_fullname.test(fullname.toLowerCase())) {
			msg.fullname = "Your-fullname is incorrect";
		}

		if (!reg_phone.test(phone)) {
			msg.phone = "Your-phone is incorrect";
		}
		if (!reg_avatar.test(avatar)) {
			msg.avatar = "The url is incorrect";
		}

		setValidationMsg(msg);
		if (Object.keys(msg).length > 0) return false;
		return true;
	};
	const validateChangePassword = () => {
		const msg = {};
		if (!passCurrent) {
			msg.passCurrent = "Please input current password";
		}
		if (!passNew) {
			msg.passNew = "Please input new password";
		}

		setValidationMsgChangePassword(msg);
		if (Object.keys(msg).length > 0) return false;
		return true;
	};

	const dispatch = useDispatch();

	// post edit profile
	const handleEdit = async (e) => {
		e.preventDefault();
		// setOpenModal(false);
		const newEdit = {
			_id: user.data._id,
			biography: biography,
			avatar: avatar,
			gender: gender,
			phone: phone,
			fullName: fullname,
		};
		const isValid = validateAll();
		if (!isValid) return;
		else await updateProfile(newEdit, dispatch, toast);
		await handleEdit();
	};

	const submitImage = async () => {
		const data = new FormData();
		data.append("file", image);
		data.append("upload_preset", "j3sbr9ix");
		console.log("data:", data);
		try {
			const res = await axios.post(
				"https://api.cloudinary.com/v1_1/dlh4vw39j/image/upload",
				data
			);
			setAvatar(res.data.url);
			toast.success("Update image success!", { autoClose: 2000 });
		} catch (err) {
			toast.error(err.message, { autoClose: 2000 });
		}
	};
	useEffect(() => {
		if (image) submitImage();
	}, [image]);

	const handleChangePassword = async (e) => {
		e.preventDefault();
		const isValid = validateChangePassword();
		if (!isValid) return;
		const acc = {
			email: user?.data.email,
			oldpassword: passCurrent,
			newpassword: passNew,
		};
		try {
			const { data } = await axios.post(
				`${BASE_URL}/api/password/changepass`,
				acc
			);
			toast.success(data?.message, { autoClose: 2000 });
		} catch (err) {
			toast.error(err.response.data?.message, { autoClose: 2000 });
		}
	};

	const handleAddMoney = async () => {
		await window.open(
			`${BASE_URL}/api/userMoney/add/${user?.data.email}/${addMoney}`
		);

		window.location.reload(true);
	};

	const handleAddMoneyVN = async () => {
		await window.open(
			`${BASE_URL}/api/userMoney/VNPayadd/${user?.data.email}/${addMoney}`
		);

		window.location.reload(true);
	};

	useEffect(() => {
		const fetchMoney = async () => {
			const { data } = await axios.get(
				`${BASE_URL}/api/userMoney/money/${user?.data.email}`
			);
			setMoney(data.money);
		};
		fetchMoney();
	}, []);

	return (
		<div className='container_myprofile'>
			{pending && <Loading />}
			<div className='main'>
				<div className='image'>
					<img src={BackgroundDefault} alt='' className='background' />
					<div className='upload'>
						<img src={avatar} alt='' className='avt_user' />
						<div className='round'>
							<input
								type='file'
								onChange={(e) => {
									setImage(e.target.files[0]);
								}}
							/>
							<i class='fa-solid fa-camera'></i>
						</div>
					</div>
				</div>
				<div className='row_mid'>
					{/* <button onClick={submitImage}>Upload</button> */}
					<div className='name'>{user?.data.fullName || user?.data.name}</div>
					<div className='biography'>{user?.data.biography || biography}</div>
				</div>
				<div className='backgroundgif'>
					<div className='margingif'>
						<div className='row1'>
							<div className='text'>Info default</div>
							<div className='btn' onClick={handleChangePassword}>
								<i class='fa-solid fa-screwdriver-wrench'></i>&nbsp;Change
								password
							</div>
						</div>
						<div className='default_main'>
							<div className='info'>
								<div className='left'>Money:</div>
								<div className='default'>
									{money}$ <Button onClick={() => setModal(true)}>Add</Button>
								</div>
								{modal && (
									<div className='modalxa'>
										<div className='modalxa-form'>
											<div>
												<button
													className='btnX'
													onClick={() => setModal(false)}
												>
													<i class='fa-solid fa-xmark'></i>
												</button>
											</div>
											<div className='container'>
												<div className='title'>Confirm deposit</div>
												<div className='content'>Current balance: {money}$</div>

												<div
													style={{
														width: "250px",
														fontSize: "17px",
													}}
												>
													<b>Note that:</b> After deposit you will not get paid
													out
												</div>
												<div
													style={{
														fontWeight: 500,
														width: "250px",
														fontSize: "17px",
														marginBottom: "10px",
													}}
												>
													<b>Benefit:</b> You will get an extra 5% when you
													deposit into your account
												</div>
												<div
													className='content'
													style={{ color: "orange", fontWeight: 600 }}
												>
													Select method
												</div>
												<Grid
													container
													width={250}
													margin='0 auto 40px'
													justifyContent='space-around'
												>
													<Button
														onClick={() => {
															setAddPayPal(!addPayPal);
															setAddVN(false);
															setAddMoney(0);
														}}
														size='small'
														sx={{
															color: "orange",
															fontSize: "13px",
															fontWeight: "bold",
															border: "1px solid orange",
														}}
													>
														With Paypal
													</Button>
													<Button
														onClick={() => {
															setAddVN(!addVN);
															setAddPayPal(false);
															setAddMoney(0);
														}}
														sx={{
															color: "orange",
															fontSize: "13px",
															fontWeight: "bold",
															border: "1px solid orange",
														}}
													>
														with VNPay
													</Button>
												</Grid>
												{addPayPal && (
													<>
														<Stack spacing={1} mt={-3} mb='35px'>
															<TextField
																size='small'
																id='outlined-basic'
																sx={{ width: "200px", ml: "20px" }}
																label='Money: $'
																onBlur={(e) => setAddMoney(e.target.value)}
															/>
															<Button
																onClick={handleAddMoney}
																mb
																sx={{ fontSize: "15px" }}
															>
																Submit PayPal
															</Button>
														</Stack>
														<div></div>
													</>
												)}
												{addVN && (
													<>
														<Stack spacing={1} mt={-3} mb='35px'>
															<TextField
																size='small'
																id='outlined-basic'
																sx={{ width: "200px", ml: "20px" }}
																label='Money: VND'
																onBlur={(e) => setAddMoney(e.target.value)}
															/>
															<Button
																onClick={handleAddMoneyVN}
																sx={{ fontSize: "15px" }}
															>
																Submit VNPAY
															</Button>
														</Stack>
														<div></div>
													</>
												)}
											</div>
										</div>
									</div>
								)}

								<div className='left'>User:</div>
								<div className='default'>{user?.data.name}</div>
								<div className='left'>Email:</div>
								<div className='default'>{user?.data.email}</div>
								<div className='left'>Account creation date:</div>
								<div className='default'>
									{user?.data.createdAt
										.slice(0, 10)
										.split("-")
										.reverse()
										.join("-")}
								</div>
								<div className='left'>Update profile date: </div>
								<div className='default'>
									{user?.data.updatedAt
										.slice(0, 10)
										.split("-")
										.reverse()
										.join("-")}
								</div>
							</div>
							<Stack rowGap={2} width={250} mt={2}>
								<TextField
									size='small'
									id='outlined-basic'
									label='Current password'
									onBlur={(e) => setPassCurrent(e.target.value)}
								/>

								{validationMsgChangePassword.passCurrent && (
									<i className='validate' style={{ color: "orange" }}>
										{validationMsgChangePassword.passCurrent}
									</i>
								)}

								<TextField
									size='small'
									id='outlined-basic'
									label='New password'
									onChange={(e) => setPassNew(e.target.value)}
								/>

								{validationMsgChangePassword.passNew && (
									<i className='validate' style={{ color: "orange" }}>
										{validationMsgChangePassword.passNew}
									</i>
								)}

								<Button
									sx={{
										border: "1px solid orange",
										color: "orange",
										width: "50%",
									}}
									onClick={handleChangePassword}
								>
									Save
								</Button>
							</Stack>
						</div>

						<form action='' className='form_edit' onSubmit={handleEdit}>
							<div className='main_form'>
								<div className='text_title'>Change your information</div>
								<InputFields
									label='Full name: '
									data={fullname}
									setData={setFullname}
								/>

								{validationMsg.fullname && (
									<i className='validate'>{validationMsg.fullname}</i>
								)}
								<InputFields label='Phone:' data={phone} setData={setPhone} />
								{validationMsg.phone && (
									<i className='validate'>{validationMsg.phone}</i>
								)}
								<InputFields
									label='Biography:'
									data={biography}
									setData={setBiography}
								/>

								{image ? (
									<></>
								) : (
									<InputFields
										label='Link avatar:'
										data={avatar}
										setData={setAvatar}
									/>
								)}
								{validationMsg.avatar && (
									<i className='validate'>{validationMsg.avatar}</i>
								)}
								<button className='btnEdit'>Edit now</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};
