import React, { useState, useEffect } from "react";
import "../../sass/components/subcomponents/booking.scss";
import { useSelector } from "react-redux";
import SeatPicker from "./react-seat-picker/dist/index";
import axios from "axios";
// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../constants";
import { Button } from "@mui/material";

export const Booking = ({ idMovie, nameMovie }) => {
	const [payment, setPayment] = useState(false);

	const [isLoading, setIsLoading] = useState(false);

	const [cinema, setCinema] = useState([]);
	const [idcinema, setIdCinema] = useState("");

	const [date, setDate] = useState([]);
	const [iddate, setIdDate] = useState("");

	const [sesscion, setSesscion] = useState([]);
	const [idsesscion, setIdSession] = useState("");

	const [seat, setSeat] = useState([]);

	const [selected, setSelected] = useState([]);
	const [idselected, setIdSelected] = useState([]);

	const [modal, setModal] = useState(false);
	const [password, setPassword] = useState("");

	const [money, setMoney] = useState(0);

	const [disabled, setDisabled] = useState(true);

	const addSeatCallback = ({ row, number, id }, addCb) => {
		setSelected((prevItems) => [...prevItems, number]);
		setIdSelected((prevItems) => [...prevItems, id]);

		// const newTooltip = `Cancel seat ${number}`;
		addCb(row, number, id);
	};

	const removeSeatCallback = ({ row, number, id }, removeCb) => {
		setSelected((list) => list.filter((item) => item !== number));
		removeCb(row, number);
	};
	const price = 10;
	const totalprice = price * selected.length;

	// call api cinema
	const fetchCinema = async () => {
		const { data } = await axios.get(
			`${BASE_URL}/api/movies/findMovieStep1/${idMovie}`
		);
		await setCinema(data);
	};
	useEffect(() => {
		fetchCinema();
	}, [idMovie]);

	// call api Date
	const fetchDate = async () => {
		const { data } = await axios.get(
			`${BASE_URL}/api/movies/findMovieStep2/${idMovie}/${idcinema}`
		);
		await setDate(data);
	};
	useEffect(() => {
		setDate([]);
		setSesscion([]);
		setIdSession("");
		setIdSelected([]);
		setSeat([]);
		fetchDate();
	}, [idcinema]);

	// call api Session
	const fetchSesscion = async () => {
		const { data } = await axios.get(
			`${BASE_URL}/api/movies/findMovieStep3/${idMovie}/${idcinema}/${iddate}`
		);
		await setSesscion(data);
	};

	useEffect(() => {
		setSesscion([]);
		setIdSession("");
		setSeat([]);
		fetchSesscion();
	}, [iddate]);

	// call api Seat
	const fetchSeat = async () => {
		setIsLoading(true);
		const { data } = await axios.get(
			`${BASE_URL}/api/movies/findMovieStep4/${idMovie}/${idcinema}/${iddate}/${idsesscion}`
		);

		await setSeat(data);
		await setIsLoading(false);
	};

	useEffect(() => {
		setSeat([]);
		fetchSeat();
	}, [idsesscion]);

	// post booking
	const user = useSelector((state) => state.auth.login?.currentUser);

	const handleBooking = async () => {
		setDisabled(true);
		const bookSeat = {
			idShowing: seat.idShowing,
			data: idselected,
		};
		await axios.post(
			`${BASE_URL}/api/movies/booking/add/${user.data._id}`,
			bookSeat
		);
	};

	// console.log("user.data._id:", user.data._id);
	// console.log("seat:", seat);
	// console.log("idshowwiing", seat.idShowing);
	// console.log("idselect:", idselected);
	//
	const open = () => {
		window.open(`${BASE_URL}/api/paypal/pay/${user.data._id}`);
		window.location.reload(false);
	};

	const newPage = async () => {
		await setTimeout(open, 1500);
	};

	const handleBtnBuy = () => {
		if (user) {
			setPayment(!payment);
		} else {
			toast.warning("Please login !");
		}
	};

	// book with account
	const email = useSelector(
		(state) => state.auth.login?.currentUser?.data?.email
	);

	const bookWithAccount = async (e) => {
		e.preventDefault();

		const bookSeat = {
			email: email,
			password: password,
		};

		try {
			await axios.post(`${BASE_URL}/api/userMoney/pay`, bookSeat);
			toast.success("Successful payment!", { autoClose: 2000 });
			setModal(false);
		} catch (err) {
			toast.error(err.response.data?.message, { autoClose: 2000 });
			toast.error("Failed", { autoClose: 2000 });
		}
	};

	useEffect(() => {
		const fetch = async () => {
			const { data } = await axios.get(
				`${BASE_URL}/api/userMoney/money/${user?.data.email}`
			);
			await setMoney(data.money);
		};
		fetch();
	}, []);

	return (
		<div>
			<div className='selectMovie'>
				<div className='col-1'>
					<div>
						<div className='row'>
							<div className='label'>Movie:</div>
							<div style={{ color: "orange" }}> {nameMovie}</div>
						</div>
						<div className='row'>
							<div className='label'>Cinema:</div>{" "}
							<select id='cinema' onChange={(e) => setIdCinema(e.target.value)}>
								<option value=''> -- Select Cinema --</option>
								{cinema?.map((items, index) => (
									<option key={index} value={items._id}>
										{items.name}
									</option>
								))}
							</select>
						</div>
						<div className='row'>
							<div className='label'>Date:</div>
							<select
								id='date'
								onChange={(e) => {
									setIdDate(e.target.value);
								}}
							>
								<option value=''>-- Select Date --</option>
								{date?.map((items, index) => (
									<option key={index} value={items}>
										{items.slice(0, 10).split("-").reverse().join("-")}
									</option>
								))}
							</select>
						</div>
						<div className='row'>
							<div className='label'>Session:</div>{" "}
							<select id='time' onChange={(e) => setIdSession(e.target.value)}>
								<option value=''>-- Select Session --</option>
								{sesscion?.map((items, index) => (
									<option key={index} value={items}>
										{items}
									</option>
								))}
							</select>
						</div>

						<br />

						<br />
					</div>
				</div>
				<div className='col-2'>
					<div className='flex'>
						<div className='available'>
							<div className='seatx'></div> &nbsp;Avaliable
						</div>
						<div className='selectedx'>
							<div className='seatx'></div> &nbsp;Selected
						</div>
						<div className='occupiedx'>
							<div className='seatx'></div> &nbsp;Occupied
						</div>
					</div>
					<div className='screen'></div>
					<div className='importpicker'>
						{seat &&
							(seat?.length !== 0 ? (
								<SeatPicker
									addSeatCallback={addSeatCallback}
									removeSeatCallback={removeSeatCallback}
									rows={seat.data}
									alpha
									maxReservableSeats={10}
									loading={isLoading}
									visible
								/>
							) : null)}
					</div>
				</div>
				{selected?.length !== 0 ? (
					<div className='col-3'>
						You selected <span id='count'>{selected.length}</span> /10 seats
						<br />
						Seat: {selected.toString()}
						<br />
						Price: {totalprice}$ <br />
						<button className='btPay' onClick={handleBtnBuy}>
							<i className='fa-solid fa-angles-right'></i> Buy Ticket
						</button>
						{payment && (
							<div className='optionpay'>
								<div>Select Payment Method</div>
								<Button
									disabled={disabled ? false : true}
									onClick={handleBooking}
								>
									<div onClick={newPage}>
										<i className='fa-regular fa-hand-point-right'></i> With
										PayPal
									</div>
								</Button>
								<br />
								<button
									onClick={() => {
										handleBooking();
										setModal(true);
									}}
								>
									<i className='fa-regular fa-hand-point-right'></i> With
									Account
								</button>
							</div>
						)}
					</div>
				) : null}
				{modal && (
					<div className='modalxa'>
						<div className='modalxa-form'>
							<div>
								<button className='btnX' onClick={() => setModal(false)}>
									<i class='fa-solid fa-xmark'></i>
								</button>
							</div>
							<div className='container'>
								<div className='title'>Confirm payment</div>
								<div className='content'>Current balance: {money}$</div>

								<div className='content'>
									The amount need to pay: {totalprice}$
								</div>

								<form action='' onSubmit={(e) => bookWithAccount(e)}>
									<span style={{ color: "black" }}>Password: </span>
									<input
										style={{
											paddingLeft: "10px",
											height: "35px",
											borderRadius: "4px",
											textDecoration: "none",
											outline: "none",
											border: "1px solid orange",
										}}
										width='100px'
										placeholder='Password...'
										className='textarea'
										onChange={(e) => setPassword(e.target.value)}
									/>
									<button className='button' style={{ marginTop: "30px" }}>
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
				)}
			</div>

			<ToastContainer />
		</div>
	);
};
