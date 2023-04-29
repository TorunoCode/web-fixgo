import React, { useState, useEffect } from "react";
import "../../sass/components/subcomponents/booking.scss";
import { useSelector } from "react-redux";
import SeatPicker from "./react-seat-picker/dist/index";
import axios from "axios";
// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Booking = ({ idMovie, nameMovie }) => {
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
			`https://backend-boo.vercel.app/api/movies/findMovieStep1/${idMovie}`
		);
		await setCinema(data);
	};
	useEffect(() => {
		fetchCinema();
	}, [idMovie]);

	// call api Date
	const fetchDate = async () => {
		const { data } = await axios.get(
			`https://backend-boo.vercel.app/api/movies/findMovieStep2/${idMovie}/${idcinema}`
		);
		await setDate(data);
	};
	useEffect(() => {
		setDate([]);
		setSesscion([]);
		setIdSession("");
		setSeat([]);
		fetchDate();
	}, [idcinema]);

	// call api Session
	const fetchSesscion = async () => {
		const { data } = await axios.get(
			`https://backend-boo.vercel.app/api/movies/findMovieStep3/${idMovie}/${idcinema}/${iddate}`
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
			`https://backend-boo.vercel.app/api/movies/findMovieStep4/${idMovie}/${idcinema}/${iddate}/${idsesscion}`
		);

		await setSeat(data);
		await setIsLoading(false);
	};
	console.log("iidsec:", idsesscion);
	useEffect(() => {
		setSeat([]);
		fetchSeat();
	}, [idsesscion]);

	console.log("seat: ", seat);
	// post booking

	const user = useSelector((state) => state.auth.login?.currentUser);
	const handleBooking = async () => {
		const bookSeat = {
			idShowing: seat.idShowing,
			data: idselected,
		};
		await axios.post(
			`https://backend-boo.vercel.app/api/movies/booking/add/${user.data._id}`,
			bookSeat
		);
	};
	const open = () => {
		window.open(
			`https://backend-boo.vercel.app/api/paypal/pay/${user.data._id}`
		);

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
	const handleUpdate = () => {
		toast.warning("Update soon !");
	};
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
								<button onClick={handleBooking}>
									<div onClick={newPage}>
										<i className='fa-regular fa-hand-point-right'></i> With
										PayPal
									</div>
								</button>
								<br />
								<button onClick={handleUpdate}>
									<i className='fa-regular fa-hand-point-right'></i> With Momo
								</button>
							</div>
						)}
					</div>
				) : null}
			</div>
			<ToastContainer />
		</div>
	);
};

export default Booking;
