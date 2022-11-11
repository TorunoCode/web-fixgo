import React, { useState, useEffect } from "react";
import "../../sass/components/subcomponents/booking.scss";
// @ts-ignoreaaa
import SeatPicker from "./react-seat-picker/dist/index";
import axios from "axios";
// ngon lành cành trúc khế lun
const Booking = ({ idMovie, nameMovie }) => {
  const [payment, setPayment] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [cinema, setCinema] = useState([]);
  const [idcinema, setIdCinema] = useState("");

  const [date, setDate] = useState([]);
  const [iddate, setIdDate] = useState("");

  const [sesscion, setSesscion] = useState([]);
  const [idsesscion, setIdSession] = useState("");

  const [seat, setSeat] = useState([]);

  const [selected, setSelected] = useState([]);

  const addSeatCallback = ({ row, number, id }, addCb) => {
    setSelected((prevItems) => [...prevItems, number]);
    // const newTooltip = `Cancel seat ${number}`;
    addCb(row, number, id);
  };
  console.log(selected);
  const removeSeatCallback = ({ row, number, id }, removeCb) => {
    setSelected((list) => list.filter((item) => item !== number));
    removeCb(row, number);
  };
  const price = 10;
  const totalprice = price * selected.length;

  // call api cinema
  useEffect(() => {
    const fetchCinema = async () => {
      const { data } = await axios.get(
        `https://backend-boo.herokuapp.com/api/movies/findMovieStep1/${idMovie}`
      );
      await setCinema(data);
    };
    fetchCinema();
  }, [idMovie]);
  console.log("idcinema " + idcinema);

  // call api Date
  useEffect(() => {
    const fetchDate = async () => {
      const { data } = await axios.get(
        `https://backend-boo.herokuapp.com/api/movies/findMovieStep2/${idMovie}/${idcinema}`
      );
      await setDate(data);
    };
    fetchDate();
  }, [idcinema]);
  console.log("iddate " + iddate);

  // call api Session
  useEffect(() => {
    const fetchSesscion = async () => {
      const { data } = await axios.get(
        `https://backend-boo.herokuapp.com/api/movies/findMovieStep3/${idMovie}/${idcinema}/${iddate}`
      );
      await setSesscion(data);
    };
    fetchSesscion();
  }, [iddate]);
  console.log("idsesscion: " + idsesscion);

  // call api Seat
  useEffect(() => {
    const fetchSeat = async () => {
      const { data } = await axios.get(
        `https://backend-boo.herokuapp.com/api/movies/findMovieStep4/${idMovie}/${idcinema}/${iddate}/${idsesscion}`
      );
      await setSeat(data);
    };
    fetchSeat();
  }, [idsesscion]);
  console.log(seat);
  const handleBooking = () => {};

  return (
    <div>
      <div className="selectMovie">
        <div className="col-1">
          <div>
            <div className="row">
              <div className="label"> Movie:</div>
              <div style={{ color: "orange" }}> {nameMovie}</div>
            </div>
            <div className="row">
              <div className="label">Cinema:</div>{" "}
              <select id="cinema" onChange={(e) => setIdCinema(e.target.value)}>
                <option value=""> -- Select Cinema --</option>
                {cinema?.map((items, index) => (
                  <option key={index} value={items._id}>
                    {items.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="row">
              <div className="label">Date:</div>
              <select id="date" onChange={(e) => setIdDate(e.target.value)}>
                <option value="">-- Select Date --</option>
                {date?.map((items, index) => (
                  <option key={index} value={items}>
                    {items.slice(0, 10).split("-").reverse().join("-")}
                  </option>
                ))}
              </select>
            </div>
            <div className="row">
              <div className="label">Session:</div>{" "}
              <select id="time" onChange={(e) => setIdSession(e.target.value)}>
                <option value="">-- Select Session --</option>
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
        <div className="col-2">
          <div className="flex">
            <div className="available">
              <div className="seatx"></div> &nbsp;Avaliable
            </div>
            <div className="selectedx">
              <div className="seatx"></div> &nbsp;Selected
            </div>
            <div className="occupiedx">
              <div className="seatx"></div> &nbsp;Occupied
            </div>
          </div>
          <div className="screen"></div>
          <div className="importpicker">
            {/* {seat?.map((items, index) => (
              <SeatPicker
                addSeatCallback={addSeatCallback}
                removeSeatCallback={removeSeatCallback}
                rows={items}
                alpha
                maxReservableSeats={10}
                visible
              />
            ))} */}
            {seat.length !== 0 ? (
              <SeatPicker
                addSeatCallback={addSeatCallback}
                removeSeatCallback={removeSeatCallback}
                rows={seat}
                alpha
                maxReservableSeats={10}
                visible
              />
            ) : null}
          </div>
        </div>
        {selected.length !== 0 ? (
          <div className="col-3">
            You selected <span id="count">{selected.length}</span> /10 seats
            <br />
            Seat: {selected.toString()}
            <br />
            Price: {totalprice}$ <br />
            <button className="btPay" onClick={() => setPayment(!payment)}>
              <i className="fa-solid fa-angles-right"></i> Buy Ticket
            </button>
            {payment && (
              <div className="optionpay">
                <div>Select Payment Method</div>
                <button>
                  <i className="fa-regular fa-hand-point-right"></i> At checkout
                  counters
                </button>
                <br />
                <button onClick={handleBooking}>
                  <i className="fa-regular fa-hand-point-right"></i> With PayPal
                </button>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Booking;
// {
//   /* {openModal && (
//             <div className="modal-booking">
//               <div className="modal-booking-form">
//                 <div>
//                   <button className="btnX" onClick={() => setOpenModal(false)}>
//                     <i class="fa-solid fa-xmark"></i>
//                   </button>
//                 </div>
//                 <div className="container">
//                   <div className="title"> Booking Form</div>
//                   <div className="content">
//                     <div className="row">
//                       <div className="coll">Movie:</div>
//                       <div className="colr">{nameMovie}</div>
//                     </div>
//                     <div className="row">
//                       <div className="coll">Cinema:</div>
//                       <div className="colr">Fixgo quận 1</div>
//                     </div>
//                     <div className="row">
//                       <div className="coll">Date:</div>
//                       <div className="colr">{iddate}</div>
//                     </div>
//                     <div className="row">
//                       <div className="coll">Session:</div>
//                       <div className="colr">9:30</div>
//                     </div>
//                     <div className="row">
//                       <div className="coll">Seat:</div>
//                       <div className="colr">10,11,12</div>
//                     </div>
//                     <div className="row">
//                       <div className="coll">Price:</div>
//                       <div className="colr">10$</div>
//                     </div>
//                   </div>
//                   <form action="" onSubmit={handleBooking}>
//                     <button className="button">Booking</button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           )} */
// }
